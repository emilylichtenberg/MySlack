import { combineReducers } from "redux";
import chatErrorsReducer from "./chat_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    chat: chatErrorsReducer
});

export default errorsReducer;