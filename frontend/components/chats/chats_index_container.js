import { connect } from "react-redux"
import { fetchChats } from "../../actions/chat_actions";
import ChatIndex from "./chats_index";
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
    chats: state.entities.chats
})

const mDTP = dispatch => ({
    fetchChats: () => dispatch(fetchChats()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP,mDTP)(ChatIndex)