import React from "react";

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
        e.preventDefault();
        App.cable.subscriptions.subscriptions[0].speak({message: this.state})
        this.setState({body: ''}) //
    }

    render() {
        return(
            <div className="message-submit-container">
                <form className="message-form" onSubmit={this.handleSubmit}>
                    <input className="message-input" type="text" value={this.state.body} placeholder='type message' onChange={this.handleUpdate('body')}/>
                    <input className="message-submit" type="submit" />
                </form>
            </div>
        )
    }
}

export default MessageForm