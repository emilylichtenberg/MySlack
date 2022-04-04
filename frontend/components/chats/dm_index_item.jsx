import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const DMIndexItem = props => {
    const icon =  <FontAwesomeIcon icon={faUser} /> 
    let chatUsers = [];
    props.chat.users.map(user => {
      if (user.username !== props.currentUser.username) {
        chatUsers.push(user.username)
      }
    })
    // debugger
    let chatUsersString = chatUsers.join(', ')
    if (chatUsersString.length > 20) {
      // debugger
      chatUsersString = chatUsersString.slice(0,20).concat('...')
    }

    return (
        <Link 
            className="chat-index-item" 
            to={`/workspaces/${props.workspaceId}/chats/${props.chat.id}`}
            onClick={() => props.fetchChat(props.chat.id)}
            >
            <li className={
                props.currentChatId == props.chat.id ?
                "chat-li active" :
                "chat-li"
                }>
                <span>{icon}</span>
                {chatUsersString}
            </li>
         </Link>

    )
}


export default DMIndexItem