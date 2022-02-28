import { connect } from "react-redux";
import Splash from './splash'
import { loginDemo } from "../../actions/session_actions";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    loginDemo: () => dispatch(loginDemo())
});

export default connect(mSTP,mDTP)(Splash)