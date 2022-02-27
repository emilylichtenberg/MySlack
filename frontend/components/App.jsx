import React from "react";
import { Route } from "react-router-dom";
import AuthRoute from '../util/route_util'
import WelcomeContainer from './welcome/welcome_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashNavContainer from "./welcome/splash_nav_container";

const App = () => (
  <div>
    <Route exact path='/' component={SplashNavContainer}/>
    <Route path='/signin' component={LoginFormContainer}/>
    <Route path='/signup' component={SignupFormContainer}/>
  </div>
);

export default App;