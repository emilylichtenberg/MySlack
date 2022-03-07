import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

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
        // this.setState({chat_id: this.props.chatId})
        // debugger
        let subIndex;
        for (let i = 0; i < App.cable.subscriptions.subscriptions.length; i++) {
            if (JSON.parse(App.cable.subscriptions.subscriptions[i].identifier).chatId === this.props.chatId) {
                // debugger
                subIndex = i;
            }
        }

        App.cable.subscriptions.subscriptions[subIndex].speak({message: this.state})
            // [0] is the reason not automatically updating
            // look at subsriptions and make sure speaking to correct
        this.setState({body: ''}) //
    }

    render() {
        // debugger
        const {chat} = this.props
        return(
            chat ? 
            <div className="message-submit-container">
                <form className="message-form" onSubmit={this.handleSubmit}>
                    <input className="message-input" type="text" value={this.state.body} placeholder={`Message #${chat.name}`} onChange={this.handleUpdate('body')}/>
                    <input className="message-submit" type="submit" value='>'/>
                    {/* <button>
                        <FontAwesomeIcon icon='fa-solid fa-paper-plane-top' onClick={this.handleSubmit}/>
                    </button> */}
                </form>
            </div>
            : ''
        )
    }
}

export default MessageForm