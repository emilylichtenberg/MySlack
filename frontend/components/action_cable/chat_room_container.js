import { connect } from "react-redux";
import { receiveMessage, receiveMessages, removeMessage } from "../../actions/message_actions";
import { withRouter } from "react-router-dom";
import { openModal, closeModal } from "../../actions/modal_actions";
import { formatTime } from "../../util/date_util";
// import { receiveUsers } from "../../actions/user_actions";

import ChatRoom from "./chat_room";
import { deleteChat, fetchChat } from "../../actions/chat_actions";

const mSTP = (state, ownProps) => {
    // debugger
    return ({

        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        chatId: parseInt(ownProps.match.params.chatId),
        workspaceId: parseInt(ownProps.match.params.workspaceId),
        chat: state.entities.chats[ownProps.match.params.chatId],
        messages: Object.values(state.entities.messages),
    
    })
};

const mDTP = dispatch => ({
    receiveMessage: message => dispatch(receiveMessage(message)),
    receiveMessages: messages => dispatch(receiveMessages(messages)),
    removeMessage: messageId => dispatch(removeMessage(messageId)),
    // receiveUsers: () => dispatch(receiveUsers()),
    fetchChat: chatId => dispatch(fetchChat(chatId)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    deleteChat: chatId => dispatch(deleteChat(chatId))
})

export default withRouter(connect(mSTP,mDTP)(ChatRoom))