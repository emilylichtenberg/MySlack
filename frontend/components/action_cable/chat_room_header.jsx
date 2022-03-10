import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock} from '@fortawesome/free-solid-svg-icons'

class ChatRoomHeader extends React.Component {

    render () {
        const {chat, currentUser, openModal, deleteChat} = this.props
        // const icon = this.props.chat.private ? <FontAwesomeIcon icon={faLock} /> : '#'
        // debugger
        return(
            this.props.chat ?
                <div className="chat-room-header-container">
                    <div className="channel-content">
                        <p id="chat-icon">{chat.private ? <FontAwesomeIcon icon={faLock} /> : '#'}</p>
                        <p id="chat-name">{chat.name}</p>
                        <p id="chat-description">{chat.description}</p>
                    </div>
                    {
                        chat.adminId === currentUser.id ?
                            <div>
                                <button onClick={() => openModal('editChannel')}>
                                    Edit
                                </button>
                                <p>/</p>
                                <button onClick={() => deleteChat(chat.id)}>
                                    Delete
                                </button>
                            </div>
                        : ''
                    }
                </div>
            : ''
        )
    }
}   

export default ChatRoomHeader