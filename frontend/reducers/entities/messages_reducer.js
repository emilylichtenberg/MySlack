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
        case REMOVE_MESSAGE:
            delete nextState[action.messageId];
            return nextState;
        default:
            return state;
    }
};

export default MessagesReducer