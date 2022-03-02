import { connect } from "react-redux"
import { fetchChats } from "../../actions/chat_actions";
import ChatIndex from "./chats_index";

const mSTP = (state, ownProps) => ({
    chats: state.entities.chats
})

const mDTP = dispatch => ({
    fetchChats: () => dispatch(fetchChats())
});

export default connect(mSTP,mDTP)(ChatIndex)