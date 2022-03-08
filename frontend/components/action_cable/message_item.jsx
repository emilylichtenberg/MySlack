import React from "react";
import {formatTime} from '../../util/date_util';
import { receiveUsers } from "../../actions/user_actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'


class MessageItem extends React.Component {
    constructor(props) {
        super(props)
        this.deleteMessage = this.deleteMessage.bind(this)
    }

    deleteMessage() {
        debugger
        // App.cable.subscriptions.subscriptions.forEach(subscription => )
    }

    render() {
        const {message, users, currentUser} = this.props
        // debugger
        return (
            message ? 
            <div className="message-item-container">
               <FontAwesomeIcon icon={faUser} className='user-icon'/>
                <div className="message-details-container">
                    <div className="message-header">
                        <p id="message-username">{users[message.sender_id].username}</p>
                        <p id="message-time">{formatTime(message.created_at)}</p>
                        {
                            currentUser.id === message.sender_id ?
                            <div>
                                <button>
                                    <FontAwesomeIcon icon={faPenToSquare}/>
                                </button>
                                <button onClick={this.deleteMessage}>
                                    <FontAwesomeIcon icon={faTrashCan}/>
                                </button>
                            </div>
                            : ''
                        }
                    </div>
                    <div className="message-content">
                        <p>{message.body}</p>
                    </div>

                </div>
            </div>
            : ''
        )
    }
}

export default MessageItem