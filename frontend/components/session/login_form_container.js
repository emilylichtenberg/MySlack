import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, removeErrors, loginDemo } from '../../actions/session_actions';
import SessionForm from './session_form';


const mSTP = state => ({
    errors: state.errors.session,
    formType: 'Sign In',
    otherLoc: <Link to='/signup'>Create an account</Link>
})

const mDTP = dispatch => ({
    action: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors()),
    loginDemo: () => dispatch(loginDemo())
})

export default connect(mSTP, mDTP)(SessionForm);
