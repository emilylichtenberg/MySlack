import { connect } from "react-redux";
import ChannelForm from './new_channel_form';
import { createChat, removeChatErrors } from "../../actions/chat_actions";
import { closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
    // debugger    
    return ({
        channel: {chat_type: 'channel', 
                  name: '', 
                  description: '', 
                  private: false, 
                  admin_id: state.entities.users[state.session.id],
                  workspace_id: ownProps.workspaceId},
        formType: 'Create a channel',
        errors: state.errors.chat,
        // currentWorkspace: ownProps.match.params.workspaceId
    })
}

const mDTP = dispatch => ({
    action: channel => dispatch(createChat(channel)),
    closeModal: () => dispatch(closeModal()),
    removeChatErrors: () => dispatch(removeChatErrors())
})

export default withRouter(connect(mSTP,mDTP)(ChannelForm))