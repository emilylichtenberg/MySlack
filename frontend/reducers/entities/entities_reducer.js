import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import WorkspacesReducer from './workspaces_reducer';
import ChatsReducer from './chats_reducer';
import MessagesReducer from './messages_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    workspaces: WorkspacesReducer,
    chats: ChatsReducer,
    messages: MessagesReducer,
})

export default entitiesReducer;