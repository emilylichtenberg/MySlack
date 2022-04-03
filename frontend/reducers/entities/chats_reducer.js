import { RECEIVE_CHATS, RECEIVE_CHAT, REMOVE_CHAT } from "../../actions/chat_actions";
import { RECEIVE_WORKSPACE } from "../../actions/workspace_actions";
import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";

const ChatsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({},state)
    switch (action.type) {
        case RECEIVE_CHATS:
            // debugger
            return action.chats
        // case RECEIVE_CURRENT_USER:
            // debugger
        case RECEIVE_CHAT:
            // debugger
            nextState[action.chat.id] = action.chat;
            return nextState;
        case RECEIVE_WORKSPACE:
            // debugger
            action.workspace.chats.forEach(chat => nextState[chat.id] = chat);
            return nextState;
        case REMOVE_CHAT:
            // debugger
            delete nextState[action.chatId];
            return nextState;
        default:
            return state;
    }
}

export default ChatsReducer