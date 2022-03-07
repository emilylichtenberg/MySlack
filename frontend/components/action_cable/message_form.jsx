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
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        App.cable.subscriptions.subscriptions[0].speak({message: this.state})
            // [0] is the reason not automatically updating
            // look at subsriptions and make sure speaking to correct
        this.setState({body: ''}) //
    }

    render() {
        // debugger
        return(
            <div className="message-submit-container">
                <form className="message-form" onSubmit={this.handleSubmit}>
                    <input className="message-input" type="text" value={this.state.body} placeholder='type message' onChange={this.handleUpdate('body')}/>
                    <input className="message-submit" type="submit" value='>'/>
                    {/* <button>
                        <FontAwesomeIcon icon='fa-solid fa-paper-plane-top' onClick={this.handleSubmit}/>
                    </button> */}
                </form>
            </div>
        )
    }
}

export default MessageForm