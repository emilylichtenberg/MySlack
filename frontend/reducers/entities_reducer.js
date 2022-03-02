import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import MessagesReducer from './messages_reducer';
import ChatsReducer from './chats_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    messages: MessagesReducer,
    chats: ChatsReducer,
})

export default entitiesReducer;