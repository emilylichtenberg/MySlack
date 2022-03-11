import { RECEIVE_CHAT_ERRORS, REMOVE_ERRORS } from '../../actions/chat_actions'

const chatErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_CHAT_ERRORS:
        // debugger
        return action.errors;
      case REMOVE_ERRORS:
        return [];
      default:
        return state;
    }
  };

  export default chatErrorsReducer;