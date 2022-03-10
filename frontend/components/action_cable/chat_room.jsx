import React from "react";
import MessageForm from './message_form'
import MessageItem from "./message_item";

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.bottom = React.createRef();
        this.createSubscription = this.createSubscription.bind(this)
    }

    componentDidMount() {
        // creating a subscription to match the chat_channel.rb backend
        // channel - subscription to this channel is created once.  will make this dynamic for specific channel?
        // received - when new data is transmitted to stream, received function invoked and message added to state
        // speak - sends data to backend. invokes backend speak method
        // this.props.receiveMessages()

        
        this.createSubscription()
    }

    createSubscription () {

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
                        // this.props.receiveUsers(data.users)
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

    componentDidUpdate(prevProps) {
        this.bottom.current.scrollIntoView();

        const subscriptionId = this.props.chatId;
        const subscription = [];
        App.cable.subscriptions.subscriptions.forEach((sub, i) => {
            let subIdentifier = JSON.parse(sub.identifier);
            subIdentifier.chatId === subscriptionId ? subscription.push(sub) : null
        })

        if (subscription.length === 0) {
            this.createSubscription()
        } else if (prevProps.chatId !== this.props.chatId) {
            subscription[0].load()
        }

    }

    render() {
        // debugger
        const {currentUser, chatId, workspaceId, messages, users, chat} = this.props
        return(
            <div className="chatroom-container">
                <ul className="message-list">
                    {
                        messages.map((message,i) => <MessageItem key={message.id} message={message} users={users} currentUser={currentUser} prevMessage={messages[i-1]}/>)
                    }
                    <div ref={this.bottom} />
                </ul>
                <MessageForm currentUser={currentUser} chatId={chatId} workspaceId={workspaceId} chat={chat}/>
            </div>
        )
    }
}

export default ChatRoom


{/* <button className="load-button" 
    onClick={this.loadChat.bind(this)}>
    Load Chat History
</button> */}