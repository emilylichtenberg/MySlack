import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, removeErrors, loginDemo } from '../../actions/session_actions';
import SessionForm from './session_form';


const mSTP = state => {
    // debugger
    return({
        errors: state.errors.session,
        formType: 'Sign Up',
        otherLoc: <Link to='/signin'>Sign In</Link>
    })
} ;

const mDTP = dispatch => ({
    action: user => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors()),
    loginDemo: () => dispatch(loginDemo())
})

export default connect(mSTP, mDTP)(SessionForm);
