import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NewDMForm from "./new_dm_form";

import { closeModal } from "../../actions/modal_actions";
import { createChat } from "../../actions/chat_actions";

const mSTP = (state, ownProps) => {
  // debugger
  return ({
    currentUser: state.entities.users[state.session.id],
    allUsers: state.entities.workspaces[ownProps.workspaceId].users,
    workspaceId: ownProps.workspaceId,
    allDMs: Object.values(state.entities.chats).filter(chat => chat.chatType !== 'channel')
  })
}

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  createChat: chat => dispatch(createChat(chat))
})

export default withRouter(connect(mSTP,mDTP)(NewDMForm))