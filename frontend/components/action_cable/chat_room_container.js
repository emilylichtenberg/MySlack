import { connect } from "react-redux";
import { receiveMessage, receiveMessages, removeMessage } from "../../actions/message_actions";
import ChatRoom from "./chat_room";

const mSTP = (state, ownProps) => ({
    messages: Object.values(state.messages),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    receiveMessage: message => dispatch(receiveMessage(message)),
    receiveMessages: messages => dispatch(receiveMessages(messages)),
    removeMessage: messageId => dispatch(removeMessage(messageId))
})

export default connect(mSTP,mDTP)(ChatRoom)