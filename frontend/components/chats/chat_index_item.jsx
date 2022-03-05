import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const ChatIndexItem = props => {
    // debugger
    const icon = props.chat.private ? <FontAwesomeIcon icon={faLock} /> : '#'
    return (
        <Link 
            className="chat-index-item" 
            to={`/chats/${props.chat.id}`}
            // onClick={() => props.fetchChat(props.chat.id)}
            >
            <li className="chat-li">
                <span>{icon}</span>
                {props.chat.name}
            </li>
         </Link>

    )
}


export default ChatIndexItem