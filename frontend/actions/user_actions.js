import * as UserApiUtil from '../util/user_api_util'
export const RECEIVE_USER = 'RECEIVE_USER';
// export const RECEIVE_USER_WORKSPACES = 'RECEIVE_USER_WORKSPACES';
// export const RECEIVE_USER_WORKSPACES = 'RECEIVE_USER_WORKSPACES';

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const fetchUser = userId => dispatch => (
    UserApiUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
);
