import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const ChatIndexItem = props => {
    const icon = props.chat.private ? <FontAwesomeIcon icon={faLock} /> : '#'
    return (
            <li>
                <Link to={`/chats/${props.chat.id}`}>
                    {icon}
                    {props.chat.name}
                </Link>
            </li>

    )
}


export default ChatIndexItem