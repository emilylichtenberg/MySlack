// import { connect } from "react-redux"
// import { fetchChat, fetchChats } from "../../actions/chat_actions";
// import ChatIndex from "./chats_index";
// import { openModal, closeModal } from "../../actions/modal_actions";

// const mSTP = (state, ownProps) => {
//     // debugger
//     return({
//         // chats: state.entities.chats,
//         currentUser: state.entities.users[state.session.id],
//         // currentWorkspace: state.entities.workspaces[ownProps.match.params.workspaceId],
//         // workspaceChats: state.entities.workspaces[ownProps.match.params.workspaceId].chats
//     })
// }

// const mDTP = dispatch => ({
//     fetchChats: () => dispatch(fetchChats()),
//     fetchChat: chatId => dispatch(fetchChat(chatId)),
//     openModal: modal => dispatch(openModal(modal)),
//     closeModal: () => dispatch(closeModal())
// });

// export default connect(mSTP,mDTP)(ChatIndex)