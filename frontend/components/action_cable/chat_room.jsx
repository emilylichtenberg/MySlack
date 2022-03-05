import React from "react";
import HeaderContainer from "../header/header_container";
import MessageForm from './message_form'
import MessageItem from "./message_item";

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.bottom = React.createRef();
        this.createSubscription = this.createSubscription.bind(this)
        // debugger
    }

    componentDidMount() {
        // creating a subscription to match the chat_channel.rb backend
        // channel - subscription to this channel is created once.  will make this dynamic for specific channel?
        // received - when new data is transmitted to stream, received function invoked and message added to state
        // speak - sends data to backend. invokes backend speak method
        // this.props.receiveMessages()

        // debugger
        // this.createSubscription()
    }

    createSubscription () {
        // debugger
        App.cable.subscriptions.create(
            {channel: 'ChatChannel', chatId: this.props.chatId},
            {
                received: data => {
                    switch (data.type) {
                      case "message":
                        this.props.receiveMessage(data.message);
                        break;
                      case "messages":
                        //   debugger
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

    // loadChat(e) {
    //     // shows all chat history even after refresh. maybe include this in component did mount?
    //     e.preventDefault();
    //     App.cable.subscriptions.subscriptions[0].load();
    //         // check which subscription this is
    // }

    componentDidUpdate() {
        this.bottom.current.scrollIntoView();
        // const subId = this.props.chatId
        // const subIndex = []
        // App.cable.subscriptions.subscriptions.forEach((sub,i) => {
        //     let subIdentifier = JSON.parse(sub.identifier)
        //     subIdentifier.chatId === subId ? subIndex.push(i) : null
        //     // debugger
        // })
        // debugger
        // if (subIndex.length === 0) {
        this.createSubscription()
        // } 

        // if chat id is already in subscription, call subscribe function in CDM. 
    }



    render() {
        // debugger
        return(
            <div className="chatroom-container">
                <ul className="message-list">
                    {
                        this.props.messages.map((message) => <MessageItem key={message.id} message={message} users={this.props.users} />)
                    }
                    <div ref={this.bottom} />
                </ul>
                <MessageForm currentUser={this.props.currentUser} chatId={this.props.chatId}/>
            </div>
        )
    }
}

export default ChatRoom


{/* <button className="load-button" 
    onClick={this.loadChat.bind(this)}>
    Load Chat History
</button> */}