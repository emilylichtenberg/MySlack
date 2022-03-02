import React from "react";
import HeaderContainer from "../header/header_container";
import MessageForm from './message_form'
import MessageItem from "./message_item";

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.bottom = React.createRef();
    }

    componentDidMount() {
        // creating a subscription to match the chat_channel.rb backend
        // channel - subscription to this channel is created once.  will make this dynamic for specific channel?
        // received - when new data is transmitted to stream, received function invoked and message added to state
        // speak - sends data to backend. invokes backend speak method
        // this.props.receiveMessages()

        App.cable.subscriptions.create(
            {channel: 'ChatChannel', chatId: this.props.chatId},
            {
                received: data => {
                    switch (data.type) {
                      case "message":
                        this.props.receiveMessage(data.message);
                        break;
                      case "messages":
                        this.props.receiveMessages(data.messages)
                        this.props.receiveUsers(data.users)
                        break;
                      case "remove":
                        this.props.removeMessage(data.messageId)
                    }
                  },
                speak: function(data) {
                    return this.perform('speak', data);
                },
                load: function() {
                    return this.perform('load');
                },
                update: function(data) {
                    return this.perform('update', data);
                },
                delete: function(data) {
                    return this.perform('delete', data);
                },
            }
        );
    }

    loadChat(e) {
        // shows all chat history even after refresh. maybe include this in component did mount?
        e.preventDefault();
        // debugger
        App.cable.subscriptions.subscriptions[0].load();
    }

    componentDidUpdate() {
        this.bottom.current.scrollIntoView();
    }

    render() {
        return(
            <div className="chatroom-container">
                <ul className="message-list">
                    {
                        this.props.messages.map((message) => <MessageItem key={message.id} message={message} users={this.props.users} />)
                    }
                    <div ref={this.bottom} />
                </ul>
                {/* <button className="load-button" 
                    onClick={this.loadChat.bind(this)}>
                    Load Chat History
                </button> */}
                <MessageForm currentUser={this.props.currentUser} chatId={this.props.chatId}/>
            </div>
        )
    }
}

export default ChatRoom