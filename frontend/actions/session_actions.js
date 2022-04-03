import * as SessionAPIUtil from '../util/session_api_util';
import * as UserAPIUtil from '../util/user_api_util'
import { receiveUser } from './user_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS'

const receiveCurrentUser = currentUser => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
  })
};

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors.responseJSON
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS
})

export const signup = (user) => (dispatch) => (
  SessionAPIUtil.signup(user)
    .then((user) => {
      // debugger
      dispatch(receiveCurrentUser(user));
      dispatch(receiveUser(user))
    })
    .fail(errors => dispatch(receiveErrors(errors))) 
)

export const login = (user) => (dispatch) => {
  return (
  SessionAPIUtil.login(user)
    .then(user => {
      // debugger
      dispatch(receiveCurrentUser(user));
      dispatch(receiveUser(user))
    })
    .fail(errors => dispatch(receiveErrors(errors))) 
  )
}

export const logout = () => (dispatch) => {
  // debugger
  return(
  SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
)}

export const loginDemo = () => dispatch => {
  const user = {username: 'demoUser', password: '123456'};
  return(
    SessionAPIUtil.login(user)
    .then(user => {
      dispatch(receiveCurrentUser(user));
      // dispatch(receiveUser(user))
    })
    // .then( user => {
    //   debugger
    //   UserAPIUtil.fetchUser(user.id)})
    .fail(errors => dispatch(receiveErrors(errors))) 
  )
}