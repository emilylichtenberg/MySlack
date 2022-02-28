import React from "react";
import MessageForm from './message_form'

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messages: []};
        this.bottom = React.createRef();
    }

    componentDidMount() {
        // creating a subscription to match the chat_channel.rb backend
        // channel - subscription to this channel is created once.  will make this dynamic for specific channel?
        // received - when new data is transmitted to stream, received function invoked and message added to state
        // speak - sends data to backend. invokes backend speak method
        App.cable.subscriptions.create(
            {channel: 'ChatChannel'},
            {
                received: data => {
                    switch (data.type) {
                      case "message":
                        this.setState({
                          messages: this.state.messages.concat(data.message)
                        });
                        break;
                      case "messages":
                        this.setState({ messages: data.messages });
                        break;
                    }
                  },
                speak: function(data) {
                    return this.perform('speak', data);
                },
                load: function() {
                    return this.perform('load');
                }
            }
        );
    }

    componentDidUpdate() {
        this.bottom.current.scrollIntoView();
    }

    render() {
        const messageList = this.state.messages.map(message => {
            return (
                <li key={message.id}>{message}
                    <div ref={this.bottom}/>
                </li>
            );
        });
        return (
            <div className="chatroom-container">
                <div>ChatRoom</div>
                <ul className="message-list">{messageList}</ul>
                <MessageForm />
            </div>
        )
    }
}

export default ChatRoom