import React from "react";
import { Route } from "react-router-dom";
import AuthRoute from '../util/route_util'
import WelcomeContainer from './welcome/welcome_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <header>
      <h1>Welcome to Slack</h1>
      <WelcomeContainer />
    </header>
    <AuthRoute path='/login' component={LoginFormContainer}/>
    <AuthRoute path='/signup' component={SignupFormContainer}/>
  </div>
);

export default App;