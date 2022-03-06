// import { connect } from "react-redux";
// import { logout } from "../../actions/session_actions";
// import { fetchWorkspace } from "../../actions/workspace_actions";

// import Header from "./header";

// const mSTP = (state, ownProps) => ({
//     currentUser: state.entities.users[state.session.id],
//     workspace: state.entities.workspaces[ownProps.match.params.workspaceId]
// })

// const mDTP = dispatch => ({
//     logout: () => dispatch(logout()),
//     fetchWorkspace: workspaceId => dispatch(fetchWorkspace(workspaceId))
// })

// export default connect(mSTP,mDTP)(Header)