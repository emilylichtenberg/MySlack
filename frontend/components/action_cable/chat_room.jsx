import React from "react";
import HeaderContainer from "../header/header_container";
// import MessageForm from './message_form'

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

    loadChat(e) {
        // shows all chat history even after refresh. maybe include this in component did mount?
        e.preventDefault();
        App.cable.subscriptions.subscriptions[0].load();
    }

    componentDidUpdate() {
        this.bottom.current.scrollIntoView();
    }

    render() {
        const messageList = this.state.messages.map((message, ind) => {
            return (
                <li key={message.id}>{message}
                    <div ref={this.bottom}/>
                </li>
            );
        });
        return (
            <div className="chatroom-container">
                {/* <HeaderContainer /> */}
                <div>ChatRoom</div>
                    <button className="load-button" 
                    onClick={this.loadChat.bind(this)}>
                    Load Chat History
                    </button>
                <div className="message-list">{messageList}</div>
                {/* create a MessageItem component? will want to include sender name, body, time sent */}
                <MessageForm />
          </div>
        )
    }
}

export default ChatRoom