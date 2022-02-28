import { connect } from "react-redux"
import { loginDemo, logout } from "../../actions/session_actions"
import SplashNav from "./splash_nav"

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    loginDemo: () => dispatch(loginDemo())
})

export default connect(mSTP, mDTP)(SplashNav)