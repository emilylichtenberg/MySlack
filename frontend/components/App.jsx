import React from "react";
import { Route } from "react-router-dom";
import AuthRoute from '../util/route_util'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './welcome/splash_container';
import HeaderContainer from './header/header_container'


const App = () => (
  <div>
    {/* <Route exact path='/' component={SplashContainer}/> */}
    <Route exact path='/' component={HeaderContainer}/>
    <Route exact path='/' component={SidebarContainer}/>
    <Route path='/signin' component={LoginFormContainer}/>
    <Route path='/signup' component={SignupFormContainer}/>
  </div>
);

export default App;