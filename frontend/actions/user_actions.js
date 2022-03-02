export const RECEIVE_USERS = 'RECEIVE_USERS';
// export const RECEIVE_USER_WORKSPACES = 'RECEIVE_USER_WORKSPACES';
// export const RECEIVE_USER_WORKSPACES = 'RECEIVE_USER_WORKSPACES';

export const receiveUser = users => ({
    type: RECEIVE_USERS,
    users
})