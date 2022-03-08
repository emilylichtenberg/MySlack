import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute} from '../util/route_util'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './welcome/splash_container';
import Modal from "./modal";
import WorkspaceContainer from './workspaces/workspace_container'

const App = () => (
  <div>
    {/* <Modal /> */}
    <AuthRoute exact path='/' component={SplashContainer}/>
    <AuthRoute path='/signin' component={LoginFormContainer}/>
    <AuthRoute path='/signup' component={SignupFormContainer}/>

    <ProtectedRoute path='/workspaces/:workspaceId/chats/:chatId' component={WorkspaceContainer}/>
    <ProtectedRoute path='' component={Modal} />
    
  </div>
);

export default App;