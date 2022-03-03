import React from "react";
import ChatIndexItem from "./chat_index_item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'

class ChatIndex extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchChats();
        this.state = {channelActive: true}
        this.toggleChannelActive = this.toggleChannelActive.bind(this)
    }

    componentDidMount() {
        
    }

    toggleChannelActive() {
        this.state.channelActive ? this.setState({channelActive: false}) : this.setState({channelActive: true})
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
                    <h3 onClick={this.toggleChannelActive}>
                        {this.state.channelActive ? <FontAwesomeIcon icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretRight}/>}
                        <span>Channels</span>
                        </h3>
                    <button onClick={() => openModal('createChannel')}>+</button>
                </div>
                <ul className={this.state.channelActive ? '' : 'hidden'}>
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