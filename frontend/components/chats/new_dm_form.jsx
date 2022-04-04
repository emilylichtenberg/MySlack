import React from "react";

class NewDMForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageUsers: [],
      searchText: ''
      // allUsers: props.allUsers
    }
    this.updateText = this.updateText.bind(this);
    this.setState = this.setState.bind(this)
  }

  updateText(field) {
    // debugger
    return e => {
      // allUsers.filter(user => user.username.includes(e.currentTarget.searchText));
      this.setState({[field]: e.currentTarget.value.toLowerCase()})
    }
  }

  renderUsers() {
    let allUsers;
    if (this.state.searchText === '') {
      allUsers = Object.values(this.props.allUsers)
    } else {
      // debugger
      allUsers = Object.values(this.props.allUsers).filter(user => user.username.toLowerCase().includes(this.state.searchText))
    }
    // debugger
    return (
      <ul>
        {
          allUsers.map(user => <li key={user.id}>{user.username}</li>)
        }
      </ul>
    )
  }
  render () {
    const {currentUser, allUsers, workspaceId, closeModal, createChat} = this.props
    return (
      <div>
        <h1>Create new message</h1>
        <input type='text' placeholder='Search for user...' onChange={this.updateText('searchText')}/>
        {/* <ul>
          {
            this.state.allUsers?.map(user => <li key={user.id}>{user.username}</li>)
          }
        </ul> */}
        {this.renderUsers()}
      </div>
    )
  }
}

export default NewDMForm