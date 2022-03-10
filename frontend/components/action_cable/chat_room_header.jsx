import React from "react";

class ChatRoomHeader extends React.Component {

    render () {
        const {chat, currentUser} = this.props
        // debugger
        return(
            this.props.chat ?
                <div className="chat-room-header-container">
                    <p>#{chat.name}</p>
                    {
                        chat.adminId === currentUser.id ?
                            <button>
                                EDIT
                            </button>
                        : ''
                    }
                </div>
            : ''
        )
    }
}   

export default ChatRoomHeader