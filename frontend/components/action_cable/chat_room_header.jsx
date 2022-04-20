import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'

class ChatRoomHeader extends React.Component {

    handleDelete() {

    }

    render () {
        const {chat, currentUser, openModal, deleteChat, chats} = this.props
        
        let chatUsers = [];
        chat?.users.map(user => {
            debugger
          if (user.displayName !== currentUser.displayName) {
            chatUsers.push(user.displayName)
          }
        })

        let chatUsersString;
        if (chatUsers.length <=2 ) {
            chatUsersString = chatUsers.join(', ')
        } else if (chatUsers.length === 3) {
            let others = chatUsers.length - 2;
            chatUsersString = `${chatUsers[0]}, ${chatUsers[1]}, ${others} other`
        } else {
            let others = chatUsers.length - 2;
            chatUsersString = `${chatUsers[0]}, ${chatUsers[1]}, ${others} others`
        }
        // debugger
        return(
            this.props.chat ?
                <div className="chat-room-header-container">
                    <div >
                        {
                            this.props.chat.chatType === 'channel' ? 
                            <div className="channel-content">
                                <p id="chat-icon">{chat.private ? <FontAwesomeIcon icon={faLock} /> : '#'}</p>
                                <p id="chat-name">{chat.name}</p>
                                <p id="chat-description">{chat.description}</p>
                                <div id="chat-details"> 
                                    <p id="see-all-users"><FontAwesomeIcon icon={faAngleDown} /></p>
                                    <ul className="gm-full-users">
                                        {
                                            chat.users.map(user => <li key={user.id}><FontAwesomeIcon icon={faUser} /><span>{user.username === currentUser.username? `${user.username} (you)`: user.username}</span></li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                            : 
                            <div className="channel-content">
                                <p id="chat-name">{chatUsersString}</p>
                                <div id="chat-details"> 
                                    <p id="see-all-users"><FontAwesomeIcon icon={faAngleDown} /></p>
                                    <ul className="gm-full-users">
                                        {
                                            chat.users.map(user => <li key={user.id}><FontAwesomeIcon icon={faUser} /><span>{user.username === currentUser.username? `${user.username} (you)`: user.username}</span></li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>
                    {
                        chat.adminId === currentUser.id && chat.chatType === 'channel' ?
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