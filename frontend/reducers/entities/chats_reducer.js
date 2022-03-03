import { RECEIVE_CHATS, RECEIVE_CHAT, REMOVE_CHAT } from "../../actions/chat_actions";

const ChatsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({},state)
    switch (action.type) {
        case RECEIVE_CHATS:
            return action.chats
        case RECEIVE_CHAT:
            nextState[action.chat.id] = action.chat;
            return nextState;
        case REMOVE_CHAT:
            delete nextState[action.chatId];
            return nextState;
        default:
            return state;
    }
}

export default ChatsReducer