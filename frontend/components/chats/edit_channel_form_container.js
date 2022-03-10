import { connect } from "react-redux";
import ChannelForm from "./new_channel_form";
import { withRouter } from "react-router-dom";
import { updateChat, removeChatErrors } from "../../actions/chat_actions";
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
    // debugger
    return ({
        formType: 'Update',
        errors: state.errors.chat,
        channel: state.entities.chats[ownProps.chatId],
        currentUser: state.entities.users[state.session.id],
        chatId: ownProps.chatId
    })
}

const mDTP = dispatch => ({
    action: channel => dispatch(updateChat(channel)),
    closeModal: () => dispatch(closeModal()),
    removeChatErrors: () => dispatch(removeChatErrors())
})


export default withRouter(connect(mSTP,mDTP)(ChannelForm))