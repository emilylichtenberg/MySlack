import { RECEIVE_CHAT } from "../../actions/chat_actions";
import { RECEIVE_MESSAGE, RECEIVE_MESSAGES, REMOVE_MESSAGE } from "../../actions/message_actions";

const MessagesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_MESSAGE:
            nextState[action.message.id] = action.message;
            return nextState;
        case RECEIVE_MESSAGES:
            return action.messages;
        // case RECEIVE_CHAT:
        //     return action.chat.messages
        case REMOVE_MESSAGE:
            // debugger
            Object.values(nextState).forEach((message,i) => {
                message.id === action.messageId ?
                    delete nextState[i] : null
            })
            return nextState;
        default:
            return state;
    }
};

export default MessagesReducer