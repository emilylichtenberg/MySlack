import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock} from '@fortawesome/free-solid-svg-icons'

class ChatRoomHeader extends React.Component {

    handleDelete() {

    }

    render () {
        const {chat, currentUser, openModal, deleteChat, chats} = this.props
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
                            <div className="edit-chat-options">
                                <button id='edit-chat' onClick={() => openModal('editChannel')}>
                                    Edit
                                </button>
                                <p>/</p>
                                {
                                    chat ? 
                                    <Link onClick={() => deleteChat(chat.id)}
                                        to={`/workspaces/${chat.workspaceId}/chats/${Object.values(chats)[0].id}`}
                                        id='delete-chat'>
                                        Delete
                                    </Link>
                                    : ''
                                }
                            </div>
                        : ''
                    }
                </div>
            : ''
        )
    }
}   

export default ChatRoomHeader