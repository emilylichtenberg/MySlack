import { RECEIVE_CHAT } from "../../actions/chat_actions";
import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_USER } from "../../actions/user_actions";
import { RECEIVE_WORKSPACE } from "../../actions/workspace_actions";

const usersReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({},state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_USER:
            // debugger
            nextState[action.user.id] = action.user
            return nextState;
        case RECEIVE_WORKSPACE:
            // debugger
            action.workspace.users.forEach(user => nextState[user.id] = user);
            return nextState
            // nextState[action.workspace.users] action.workspace.users;
        case RECEIVE_CHAT:
            // debugger
            action.chat.users.forEach(user => nextState[user.id] = user);
            return nextState;
        default:
            return state;
    }
}

export default usersReducer;