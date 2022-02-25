import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mSTP = state => ({
    errors: state.errors.session,
    formType: 'sign up'
});

const mDTP = dispatch => ({
    action: user => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SessionForm);
