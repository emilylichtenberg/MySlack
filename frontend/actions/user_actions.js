import * as UserApiUtil from '../util/user_api_util'
export const RECEIVE_USERS = 'RECEIVE_USERS';
// export const RECEIVE_USER_WORKSPACES = 'RECEIVE_USER_WORKSPACES';
// export const RECEIVE_USER_WORKSPACES = 'RECEIVE_USER_WORKSPACES';

export const receiveUser = users => ({
    type: RECEIVE_USERS,
    users
})

export const fetchUser = userId => dispatch => (
    UserApiUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser))
);

