import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import MessagesReducer from './messages_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    messages: MessagesReducer
})

export default entitiesReducer;