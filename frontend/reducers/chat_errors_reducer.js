import { RECEIVE_CHAT_ERRORS } from '../actions/chat_actions'

const chatErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_CHAT_ERRORS:
        return action.errors;
      default:
        return state;
    }
  };

  export default chatErrorsReducer;