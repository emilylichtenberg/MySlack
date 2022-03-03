import { connect } from "react-redux";
import { withRouter, Redirect, Route } from "react-router-dom";
import React from "react";

const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} 
        render={props => !loggedIn ? <Component {...props} /> : <Redirect to='/chats/1'/>}
            />
);
// ultimately set this to default channel to render???

const Protected = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} 
        render={props => loggedIn ? <Component {...props} /> : <Redirect to='/'/>}
            />
);

const mSTP = state => ({
    loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(connect(mSTP, null)(Auth))
export const ProtectedRoute = withRouter(connect(mSTP, null)(Protected))

