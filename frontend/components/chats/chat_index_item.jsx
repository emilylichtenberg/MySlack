import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock} from '@fortawesome/free-solid-svg-icons'


const ChatIndexItem = props => {
    const icon = props.chat.private ? <FontAwesomeIcon icon={faLock} /> : '#'
    return (
            <li>
                {icon}
                {props.chat.name}
            </li>

    )
}


export default ChatIndexItem