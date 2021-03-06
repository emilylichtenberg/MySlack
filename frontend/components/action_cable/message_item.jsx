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
        this.state = {...props.message, editActive: false, lastSavedBody: props.message.body}
        this.deleteMessage = this.deleteMessage.bind(this);
        this.beginEdit = this.beginEdit.bind(this);
        this.endEdit = this.endEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.editMessage = this.editMessage.bind(this);
        this.handleKey = this.handleKey.bind(this)
    }

    deleteMessage() {
        // debugger
        // const subscription = [];
        // App.cable.subscriptions.subscriptions.forEach(sub => {
        //     let subIdentifier = JSON.parse(sub.identifier);
        //     subIdentifier.chatId === this.props.message.chat_id ? subscription.push(sub) : null
        // })
        // subscription[0].delete(this.props.message)
        // subscription[0].load()
    }

    beginEdit() {
        this.setState({editActive: true})
    }

    endEdit() {
        this.setState({editActive: false, body: this.state.lastSavedBody})
    }

    handleChange(e) {
        e.preventDefault()
        this.setState({body: e.currentTarget.value})
    }

    editMessage() {
        const subscription = [];
        App.cable.subscriptions.subscriptions.forEach(sub => {
            let subIdentifier = JSON.parse(sub.identifier);
            subIdentifier.chatId === this.props.message.chat_id ? subscription.push(sub) : null
        })
        subscription[0].update(this.state)
        subscription[0].load()
        this.setState({editActive: false, lastSavedBody: this.state.body})
    }

    handleKey(e) {
        // debugger
        // e.preventDefault()
        e.key === 'Enter' ? this.editMessage() : null
    }

    render() {
        const {message, users, currentUser, openModal} = this.props
        let prevMessageId = this.props.prevMessage ? this.props.prevMessage.sender_id : 0
        
        // debugger
        return (
            users[message.sender_id] ? 
                <div className="full-message-item-container">
                    {
                        prevMessageId !== message.sender_id ?
                        <div className="user-icon-container">
                            <FontAwesomeIcon icon={faUser} className="user-icon"/>
                        </div>
                        : <div className="user-icon-placeholder">{formatTime(message.created_at)}</div>
                    }
                    {
                        !this.state.editActive ? 
                            <div className="message-main-container">
                                <div className="message-main">
                                    {
                                        prevMessageId !== message.sender_id ?
                                            <div className="message-header">
                                                <p id="message-username">{users[message.sender_id].username}</p>
                                                <p id="message-time">{formatTime(message.created_at)}</p>
                                            </div>
                                        : ''
                                    }
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
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                            </button>
                                            {/* <button onClick={this.deleteMessage}> */}
                                            <button onClick={() => openModal(message)}>
                                                <FontAwesomeIcon icon={faTrashCan}/>
                                            </button>
                                        </div>
                                        : ''
                                    }
                                </div>
                            </div>
                            : 
                            <div className="message-update-options">
                                <input type="text" value={this.state.body} onChange={this.handleChange} onKeyPress={this.handleKey}/>
                                <div className="edit-message-options">
                                        <button id='cancel-edit' onClick={this.endEdit}>Cancel</button>
                                        <button id="save-edit" onClick={this.editMessage}>Save</button>
                                </div>
                            </div> 
                    }
                </div>
            : ''
        )
    }     
}

export default MessageItem




// return (
//     users[message.sender_id] ? 
//     <div className="message-item-container">
//        <FontAwesomeIcon icon={faUser} className={prevMessageId === message.sender_id ? "user-icon" : "user-icon-hidden"}/>
//        {
//            !this.state.editActive ?
//                 <div className="message-details-container">
//                     <div className="message-left">
//                         <div className="message-header">
//                             <div className="message-header-content">
//                                 <p id="message-username">{users[message.sender_id].username}</p>
//                                 <p id="message-time">{formatTime(message.created_at)}</p>
//                             </div>
    
//                         </div>
//                         <div className="message-content">
//                             <p>{message.body}</p>
//                             {message.created_at !== message.updated_at ? 
//                                 <p className="edited">(edited)</p>
//                                 : ''} 
//                         </div>
//                     </div>
//                     <div className="message-right">
//                             {
//                                 currentUser.id === message.sender_id ?
//                                 <div className="message-update-icons">
//                                     <button onClick={this.beginEdit}>
//                                         <FontAwesomeIcon icon={faPenToSquare}/>
//                                     </button>
//                                     <button onClick={this.deleteMessage}>
//                                         <FontAwesomeIcon icon={faTrashCan}/>
//                                     </button>
//                                 </div>
//                                 : ''
//                             }
//                         </div>
//                 </div>  
//          :
//                <div className="message-update-options">
//                    <input type="text" value={this.state.body} onChange={this.handleChange} onKeyPress={this.handleKey}/>
//                    <div className="edit-message-options">
//                         <button id='cancel-edit' onClick={this.endEdit}>Cancel</button>
//                         <button id="save-edit" onClick={this.editMessage}>Save</button>
//                    </div>
//                </div>            
//        }
//     </div>
//     : ''
// )