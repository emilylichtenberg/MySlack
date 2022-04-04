import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import ChatIndexItem from "./chat_index_item";
import DMIndexItem from "./dm_index_item";

class ChatIndex extends React.Component {
    constructor(props) {
        super(props);
        // this.props.fetchChats();
        this.state = {channelActive: true, DMActive: true}
        this.toggleChannelActive = this.toggleChannelActive.bind(this)
        this.toggleDMActive = this.toggleDMActive.bind(this)
    }

    toggleChannelActive() {
        this.state.channelActive ? this.setState({channelActive: false}) : this.setState({channelActive: true})
    }
    toggleDMActive() {
        this.state.DMActive ? this.setState({DMActive: false}) : this.setState({DMActive: true})
    }

    componentDidUpdate() {
        // debugger
        // const workspaceChats = this.props.currentWorkspace.chats
        // workspaceChats ? 
        //     workspaceChats.map(chat => this.props.fetchChat(chat.id))
        //     : ''
    }

    render () {
        const {openModal, fetchChat, currentWorkspace, currentChatId, chats, currentUser} = this.props
        // debugger
        // let chats = currentWorkspace ? currentWorkspace.chats : ''
        let channels = [];
        let dms = [];
      
        Object.values(chats).forEach(chat => {
            if (chat.chatType === 'channel') {
                channels.push(chat)
            } else {
                dms.push(chat)
            }
        })

        // debugger
        return (
            <div className="channel-message-container">
                <div className="current-workspace-header">
                        <h1 className="workspace-name">{currentWorkspace ? currentWorkspace.name : ''}</h1>
                        {/* <button><FontAwesomeIcon icon={faPenToSquare} className='create-workspace-icon'/></button> */}
                </div>
                <div className="channel-header-container">
                    <h3 onClick={this.toggleChannelActive}>
                        {this.state.channelActive ? <FontAwesomeIcon icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretRight}/>}
                        <span>Channels</span>
                    </h3>
                    <button onClick={() => openModal('createChannel')}>+</button>
                </div>
                <ul className={this.state.channelActive ? '' : 'hidden'}>
                    {
                        channels.map(channel => <ChatIndexItem key={channel.id} chat={channel} fetchChat={fetchChat} 
                            workspaceId={currentWorkspace.id} 
                            currentChatId={currentChatId}/>)
                    }
                    <li onClick={() => openModal('createChannel')} className="chat-li"><span id="add-chat">+</span>Add Channels</li>
                </ul>
        
                <div className="dm-message-container">
                    <h3 onClick={this.toggleDMActive}>
                        {this.state.DMActive ? <FontAwesomeIcon icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretRight}/>}
                        <span>Direct messages</span>
                    </h3>
                    {/* <button onClick={this.openCreateNewMessage}>+</button> */}
                </div>
                <ul className={this.state.DMActive ? '' : 'hidden'}>
                    {
                        dms.map(dm => <DMIndexItem key={dm.id} chat={dm} fetchChat={fetchChat} workspaceId={currentWorkspace.id} currentUser={currentUser} currentChatId={currentChatId}/>)
                    }
                    {/* <li onClick={() => openModal('createChannel')} className="chat-li"><span id="add-chat">+</span>Add Channels</li> */}
                </ul>

            </div>
        )
    }
};

export default ChatIndex