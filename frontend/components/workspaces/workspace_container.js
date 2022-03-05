import { connect } from "react-redux";
import Workspace from "./workspace";
import { fetchWorkspace } from "../../actions/workspace_actions";

const mSTP = (state, ownProps) => {
    return ({
        usersWorkspaces: state.entities.users[state.session.id].workspaces,
        currentWorkspace: state.entities.workspaces[ownProps.match.params.workspaceId],
        currentUser: state.entities.users[state.session.id]
    })
};

const mDTP = dispatch => ({
    fetchWorkspace: workspaceId => dispatch(fetchWorkspace(workspaceId))
    // chats?
});

export default connect(mSTP,mDTP)(Workspace)