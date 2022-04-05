import React from "react";
import { async } from "regenerator-runtime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

class NewDMForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageUsers: [props.currentUser],
      searchText: ''
      // allUsers: props.allUsers
    }
    this.updateText = this.updateText.bind(this);
    this.setState = this.setState.bind(this);
    this.addUser = this.addUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  updateText(field) {
    // debugger
    return e => {
      // allUsers.filter(user => user.username.includes(e.currentTarget.searchText));
      this.setState({[field]: e.currentTarget.value.toLowerCase()})
    }
  }

  addUser(newUser) {
    // e.preventDefault();
    if (this.state.messageUsers.includes(newUser)) {
      this.setState({messageUsers: this.state.messageUsers.filter(user => user.id !== newUser.id)})
    } else {
      this.setState({messageUsers: this.state.messageUsers.concat(newUser)})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let existingChat;
    let stateMessageUserIds = [].sort();
    this.state.messageUsers.forEach(user => stateMessageUserIds.push(user.id))
    
    this.props.allDMs.forEach(chat => {
      let chatIDs = [];
      chat.users.forEach(user => chatIDs.push(user.id));
      // debugger
      if (JSON.stringify(chatIDs.sort()) === JSON.stringify(stateMessageUserIds)) {
        existingChat = chat
      }
    })
    
    if (existingChat && existingChat.workspaceId === this.props.workspaceId) {
      debugger
      this.props.history.push({pathname: `/workspaces/${this.props.workspaceId}/chats/${existingChat.id}`});
      this.props.closeModal()
    } else {
      let newChat = {}
      newChat.users = {}
      this.state.messageUsers.forEach(user => {
        // debugger
        newChat.users[user.id] = user
      });
      if (this.state.messageUsers.length > 2) {
        newChat.chat_type = 'GM'
      } else {
        newChat.chat_type = 'DM'
      }
      newChat.workspace_id = this.props.workspaceId;
      newChat.admin_id = this.props.currentUser.id;
      newChat.private = true;
      let submitMessage = async () => this.props.createChat(newChat);
      submitMessage()
        .then(chat => {
          this.props.history.push({pathname: `/workspaces/${this.props.workspaceId}/chats/${chat.chat.id}`})
        })
        .then(() => this.props.closeModal());
    }

  }

  renderUsers() {
    let showUsers;
    if (this.state.searchText === '') {
      // debugger
      showUsers = this.props.allUsers.filter(user => user.id !== this.props.currentUser.id && !this.state.messageUsers.includes(user))
    } else {
      // debugger
      showUsers = this.props.allUsers.filter(user => (user.username.toLowerCase().includes(this.state.searchText) && user.id !== this.props.currentUser.id))
    }
    // debugger
    return (
      <div className="chat-users-container">
        <h2>Selected Users:</h2>
          <ul className="selected-users">
            {
              this.state.messageUsers.filter(user => user.id !== this.props.currentUser.id).map(user => 
              <li key={user.id} onClick={() => this.addUser(user)}>{`${user.username} `}<span>x</span></li>)
            }
          </ul>
        <h2>Add More:</h2>
          <ul className="view-all-users">
            {
              showUsers.map(user => <li key={user.id} onClick={() => this.addUser(user)}><FontAwesomeIcon icon={faUser} className="user-icon"/><span>{user.username}</span></li>)
            }
          </ul>
      </div>
    )
  }
  render () {
    const {currentUser, allUsers, workspaceId, closeModal, createChat} = this.props
    return (
      <div className="new-dm-container">
        <h1>Create new message</h1>
        <input type='text' placeholder='Search for user...' onChange={this.updateText('searchText')}/>
        {this.renderUsers()}
        <button onClick={this.handleSubmit} disabled={this.state.messageUsers.length < 2} className={this.state.messageUsers.length < 2 ? 'create-message-disabled' : 'create-message-button'}>Create message</button>
      </div>
    )
  }
}

export default NewDMForm