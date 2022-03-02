import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute ,ProtectedRoute} from '../util/route_util'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './welcome/splash_container';
import HeaderContainer from './header/header_container'
import SideNavContainer from './side_nav/side_nav_container'
import ChatRoomContainer from "./action_cable/chat_room_container";


const App = () => (
  <div>
    <AuthRoute exact path='/' component={SplashContainer}/>
    <AuthRoute path='/signin' component={LoginFormContainer}/>
    <AuthRoute path='/signup' component={SignupFormContainer}/>
    <ProtectedRoute path='/' component={HeaderContainer}/>
    <ProtectedRoute path='/' component={SideNavContainer}/>
    <ProtectedRoute path='/chats/:chatId' component={ChatRoomContainer}/>
    
  </div>
);

export default App;