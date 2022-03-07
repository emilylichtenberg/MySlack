import { RECEIVE_WORKSPACES, RECEIVE_WORKSPACE, REMOVE_WORKSPACE } from "../../actions/workspace_actions";

const WorkspacesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_WORKSPACES:
            // debugger
            return action.workspaces;
        case RECEIVE_WORKSPACE:
            // debugger
            nextState[action.workspace.id] = action.workspace;
            return nextState;
        case REMOVE_WORKSPACE:
            delete nextState[action.workspace.id];
            return nextState;
        default:
            return state;
    }
}

export default WorkspacesReducer