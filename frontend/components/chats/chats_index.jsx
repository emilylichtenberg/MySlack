import React from "react";
import ChatIndexItem from "./chat_index_item";

class ChatIndex extends React.Component {
    constructor(props) {
        super(props)
        this.props.fetchChats()
    }

    componentDidMount() {
    }

    render () {
        const {chats, openModal} = this.props
        let channels = [];
        let dms = [];
      
        Object.values(chats).forEach(chat => {
            if (chat.chatType === 'channel') {
                channels.push(chat)
            } else {
                dms.push(chat)
            }
        })

        return (
            <div className="channel-message-container">
                <div className="channel-header-container">
                    <h3>Channels</h3>
                    <button onClick={() => openModal('createChannel')}>+</button>
                </div>
                <ul>
                    {
                        channels.map(channel => <ChatIndexItem key={channel.id} chat={channel}/>)
                    }
                    <li onClick={() => openModal('createChannel')} className="chat-li"><span id="add-chat">+</span>Add Channels</li>
                </ul>
        
                <div className="dm-message-container">
                    <h3>Direct Messages</h3>
                    <button onClick={this.openCreateNewMessage}>+</button>
                </div>

            </div>
        )
    }
};

export default ChatIndex