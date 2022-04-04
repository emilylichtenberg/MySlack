import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

class DeleteMessageModal extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    // debugger
    const subscription = [];
    App.cable.subscriptions.subscriptions.forEach(sub => {
        let subIdentifier = JSON.parse(sub.identifier);
        subIdentifier.chatId === this.props.message.chat_id ? subscription.push(sub) : null
    })
    subscription[0].delete(this.props.message)
    subscription[0].load()
    this.props.closeModal()
  }

  render () {
    // debugger
    const {message, users} = this.props
    return (
      <div>
        <div className="delete-message-header">
          <h2>Delete message</h2>
          <button onClick={() => this.props.closeModal()}>X</button>
        </div>
        <div className="delete-message-warning">
          <h4>Are you sure you want to delete this message?  This cannot be undone.</h4>
        </div>
        <div className="delete-message-container">
          <div className="user-icon-container">
            <FontAwesomeIcon icon={faUser} className="user-icon"/>
          </div>
          <div className="delete-message-body">
            <p><span>{users[message.sender_id].username}</span></p>
            <p>{message.body}</p>
          </div>
        </div>
        <div className="delete-message-buttons">
          <button className="cancel-delete" onClick={() => this.props.closeModal()}>Cancel</button>
          <button className="delete" onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    )
  }
}

export default DeleteMessageModal