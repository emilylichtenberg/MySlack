import React from "react";
import { Route } from "react-router-dom";
import AuthRoute from '../util/route_util'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './welcome/splash_container';
import HeaderContainer from './header/header_container'
import SideNavContainer from './side_nav/side_nav_container'

const App = () => (
  <div>
    {/* <Route exact path='/' component={SplashContainer}/> */}
    <Route exact path='/' component={HeaderContainer}/>
    <Route exact path='/' component={SideNavContainer}/>
    <Route path='/signin' component={LoginFormContainer}/>
    <Route path='/signup' component={SignupFormContainer}/>
  </div>
);

export default App;