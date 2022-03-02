import React from "react";
import {formatTime} from '../../util/date_util'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
// import {BsPersonSquare} from 'react-icons/bs'
// const profileIcon = <FontAwesomeIcon icon="fa-solid fa-user" />

class MessageItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {message, users} = this.props
        // debugger 
        return (
            // <div className="message-item">
            //     <div className="message-details-container">
            //         <FontAwesomeIcon icon={faUser} className='user-icon'/>
            //         <div className="message-details">
            //             <p id="message-username">{users[message.sender_id].username}</p>
            //             <p id="message-time">{formatTime(message.created_at)}</p>
            //         </div>
            //     </div>
            //     <div>
            //         <p>{message.body}</p>
            //     </div>
            // </div>
            <div className="message-item-container">
               <FontAwesomeIcon icon={faUser} className='user-icon'/>
                <div className="message-details-container">
                    <div className="message-header">
                        <p id="message-username">{users[message.sender_id].username}</p>
                        <p id="message-time">{formatTime(message.created_at)}</p>
                    </div>
                    <div className="message-content">
                        <p>{message.body}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MessageItem