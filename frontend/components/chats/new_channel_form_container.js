import { connect } from "react-redux";
import ChannelForm from './new_channel_form';
import { createChat } from "../../actions/chat_actions";
import { closeModal } from "../../actions/modal_actions";

const mSTP = state => ({
    channel: {chat_type: 'channel', name: '', description: '', private: false, admin_id: 1, workspace_id: 1},
    formType: 'Create a channel'
})

const mDTP = dispatch => ({
    action: channel => dispatch(createChat(channel)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP,mDTP)(ChannelForm)