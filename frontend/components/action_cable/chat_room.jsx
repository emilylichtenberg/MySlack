import React from "react";
import HeaderContainer from "../header/header_container";
import MessageForm from './message_form'

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        debugger
        this.state = {messages: []};
        this.bottom = React.createRef();
    }

    componentDidMount() {
        debugger
        // creating a subscription to match the chat_channel.rb backend
        // channel - subscription to this channel is created once.  will make this dynamic for specific channel?
        // received - when new data is transmitted to stream, received function invoked and message added to state
        // speak - sends data to backend. invokes backend speak method
        App.cable.subscriptions.create(
            {channel: 'ChatChannel'},
            {
                received: data => {
                    debugger
                    switch (data.type) {
                      case "message":
                        this.props.receiveMessage(data.message);
                        break;
                      case "messages":
                        this.setState({ messages: data.messages });
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
        App.cable.subscriptions.subscriptions[0].load();
    }

    componentDidUpdate() {
        // debugger
        this.bottom.current.scrollIntoView();
    }

    render() {
        // debugger
        return(
            <div className="chatroom-container">
                <ul>
                    {
                        this.state.messages.map((message, ind) => <li key={ind}>{message.body}</li>)
                        // ADD back in div for reference so scroll into view works
                        // any time we update page we want that bottom div to be in view
                    }
                    <div ref={this.bottom} />
                </ul>
                <button className="load-button" 
                    onClick={this.loadChat.bind(this)}>
                    Load Chat History
                </button>
                <MessageForm />
            </div>
        )
    }
}

export default ChatRoom