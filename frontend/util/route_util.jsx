import { connect } from "react-redux";
import { withRouter, Redirect, Route } from "react-router-dom";
import React from "react";

const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} 
        render={props => !loggedIn ? <Component {...props} /> : <Redirect to='/'/>}
            />
);

const mSTP = state => ({
    loggedIn: Boolean(state.session.id)
});

export default withRouter(connect(mSTP, null)(Auth))