import { connect } from "react-redux";
import { receiveMessage, receiveMessages, removeMessage } from "../../actions/message_actions";
import { withRouter } from "react-router-dom";
import { formatTime } from "../../util/date_util";
// import { receiveUsers } from "../../actions/user_actions";

import ChatRoom from "./chat_room";

const mSTP = (state, ownProps) => {
    // debugger
    return ({
        // .filter(message => message.chatId === parseInt(ownProps.match.params.chatId)),
        // filter messages for correct chat id
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        chatId: parseInt(ownProps.match.params.chatId),
        workspaceId: parseInt(ownProps.match.params.workspaceId),
        chat: state.entities.chats[ownProps.match.params.chatId],
        messages: Object.values(state.entities.messages),
        // workspaceUsers: state.entities.workspaces[ownProps.match.params.workspaceId].users
    })
};

const mDTP = dispatch => ({
    receiveMessage: message => dispatch(receiveMessage(message)),
    receiveMessages: messages => dispatch(receiveMessages(messages)),
    removeMessage: messageId => dispatch(removeMessage(messageId))
    // receiveUsers: users => dispatch(receiveUsers(users))
})

export default withRouter(connect(mSTP,mDTP)(ChatRoom))