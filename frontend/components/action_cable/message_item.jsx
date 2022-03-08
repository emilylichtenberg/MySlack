import React from "react";
import {formatTime} from '../../util/date_util';
import { receiveUsers } from "../../actions/user_actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'


class MessageItem extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     editActive: false,
        //     message: props.message
        // }
        this.state = {...props.message, editActive: false}
        // debugger
        this.deleteMessage = this.deleteMessage.bind(this);
        this.beginEdit = this.beginEdit.bind(this);
        this.endEdit = this.endEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.editMessage = this.editMessage.bind(this)
    }

    deleteMessage() {
        const subscription = [];
        App.cable.subscriptions.subscriptions.forEach(sub => {
            let subIdentifier = JSON.parse(sub.identifier);
            subIdentifier.chatId === this.props.message.chat_id ? subscription.push(sub) : null
        })
        // debugger
        subscription[0].delete(this.props.message)
        subscription[0].load()
    }

    beginEdit() {
        this.setState({editActive: true})
    }

    endEdit() {
        this.setState({editActive: false})
    }

    handleChange(e) {
        // debugger
        this.setState({body: e.currentTarget.value})
    }

    editMessage() {
        // debugger
        const subscription = [];
        App.cable.subscriptions.subscriptions.forEach(sub => {
            let subIdentifier = JSON.parse(sub.identifier);
            subIdentifier.chatId === this.props.message.chat_id ? subscription.push(sub) : null
        })
        // debugger
        subscription[0].update(this.state)
        subscription[0].load()
        this.setState({editActive: false})
    }

    render() {
        const {message, users, currentUser} = this.props
        // debugger
        return (
            message ? 
            <div className="message-item-container">
               <FontAwesomeIcon icon={faUser} className='user-icon'/>
               {
                   !this.state.editActive ?
                        <div className="message-details-container">
                            <div className="message-left">
                                <div className="message-header">
                                    <div className="message-header-content">
                                        <p id="message-username">{users[message.sender_id].username}</p>
                                        <p id="message-time">{formatTime(message.created_at)}</p>
                                    </div>
            
                                </div>
                                <div className="message-content">
                                    <p>{message.body}</p>
                                    {message.created_at !== message.updated_at ? 
                                        <p className="edited">(edited)</p>
                                        : ''} 
                                </div>
                            </div>
                            <div className="message-right">
                                    {
                                        currentUser.id === message.sender_id ?
                                        <div className="message-update-icons">
                                            <button onClick={this.beginEdit}>
                                                <FontAwesomeIcon icon={faPenToSquare}/>
                                            </button>
                                            <button onClick={this.deleteMessage}>
                                                <FontAwesomeIcon icon={faTrashCan}/>
                                            </button>
                                        </div>
                                        : ''
                                    }
                                </div>
                        </div>  
                 :
                       <div className="message-update-options">
                           <input type="text" value={this.state.body} onChange={this.handleChange}/>
                           <button onClick={this.endEdit}>Cancel</button>
                           <button onClick={this.editMessage}>Save</button>
                       </div>            
               }
            </div>
            : ''
        )
    }
}

export default MessageItem