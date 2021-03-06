import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {body: '', chat_id: props.chatId, sender_id: props.currentUser.id, parent_message_id: 1}; //update to be dynamic
            // add chat id, curr user etc to state on submit
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUpdate(field) {
        return e => this.setState({[field]: e.currentTarget.value, chat_id: this.props.chatId})
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        if (this.state.body.length === 0) return
        let currentSubscription;
        for (let i = 0; i < App.cable.subscriptions.subscriptions.length; i++) {
            if (JSON.parse(App.cable.subscriptions.subscriptions[i].identifier).chatId === this.props.chatId) {
                // debugger
                currentSubscription = i;
            }
        }

        App.cable.subscriptions.subscriptions[currentSubscription].speak({message: this.state})
        this.setState({body: ''}) //
    }

    render() {
        const {chat, currentUser} = this.props
        let chatUsers = [];
        chat?.users.map(user => {
          if (user.username !== currentUser.username) {
            chatUsers.push(user.displayName)
          }
        })
        let chatUsersString = chatUsers.join(', ')
        if (chatUsersString.length > 50) {
            // debugger
            chatUsersString = chatUsersString.slice(0,50).concat('...')
          }
        // debugger
        return(
            chat ? 
            <div className="message-submit-container">
                {
                    chat.chatType === 'channel' ? 
                    <form className="message-form">
                        <input className="message-input" type="text" requried='true' value={this.state.body} placeholder={`Message #${chat.name}`} onChange={this.handleUpdate('body')}/>
                        <button onClick={this.handleSubmit}>
                            <FontAwesomeIcon icon={faCircleArrowRight} size='2x'/>
                        </button>
                    </form>
                    :
                    <form className="message-form">
                    <input className="message-input" type="text" requried='true' value={this.state.body} placeholder={`Message ${chatUsersString}`} onChange={this.handleUpdate('body')}/>
                    <button onClick={this.handleSubmit}>
                        <FontAwesomeIcon icon={faCircleArrowRight} size='2x'/>
                    </button>
                </form>

                }
            </div>
            : ''
        )
    }
}

export default MessageForm