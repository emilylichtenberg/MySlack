import React from "react";
import ChatIndexItem from "./chat_index_item";

class ChatIndex extends React.Component {
    constructor(props) {
        super(props)
        this.props.fetchChats()
    }

    componentDidMount() {
    }

    openCreateChannelModal() {

    }

    openCreateNewMessage() {

    }

    render () {
        const {chats} = this.props
        let channels = [];
        let dms = [];
        // debugger
        Object.values(chats).forEach(chat => {
            if (chat.chatType === 'channel') {
                channels.push(chat)
            } else {
                dms.push(chat)
            }
        })
        // debugger
        return (
            <div>

                    <h3>Channels</h3>
                    <button onClick={this.openCreateChannelModal}>+</button>
                    <ul>
                        {
                            channels.map(channel => <ChatIndexItem key={channel.id} chat={channel}/>)
                        }
                    </ul>
                    <h3>Direct Messages</h3>
                    <button onClick={this.openCreateNewMessage}>+</button>

            </div>
        )
    }
};

export default ChatIndex