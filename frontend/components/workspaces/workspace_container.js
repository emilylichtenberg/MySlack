import { connect } from "react-redux";
import Workspace from "./workspace";
import { fetchWorkspace } from "../../actions/workspace_actions";
import { fetchChat, fetchChats } from "../../actions/chat_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";

const mSTP = (state, ownProps) => {
    // debugger
    return ({
        usersWorkspaces: state.entities.users[state.session.id].workspaces,
        currentWorkspace: state.entities.workspaces[ownProps.match.params.workspaceId],
        currentUser: state.entities.users[state.session.id],
        chats: Object.values(state.entities.chats).filter(chat => chat.workspaceId === ownProps.match.params.workspaceId)
    })
};

const mDTP = dispatch => ({
    fetchWorkspace: workspaceId => dispatch(fetchWorkspace(workspaceId)),
    fetchChats: () => dispatch(fetchChats()),
    fetchChat: chatId => dispatch(fetchChat(chatId)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    logout: () => dispatch(logout())
    // chats?
});

export default connect(mSTP,mDTP)(Workspace)