import { connect } from "react-redux";
import ChannelForm from './new_channel_form';
import { createChat, removeChatErrors } from "../../actions/chat_actions";
import { closeModal } from "../../actions/modal_actions";

const mSTP = state => ({
    channel: {chat_type: 'channel', name: '', description: '', private: false, admin_id: 1, workspace_id: 1},
    formType: 'Create a channel',
    errors: state.errors.chat
})

const mDTP = dispatch => ({
    action: channel => dispatch(createChat(channel)),
    closeModal: () => dispatch(closeModal()),
    removeChatErrors: () => dispatch(removeChatErrors())
})

export default connect(mSTP,mDTP)(ChannelForm)