import React from "react";
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import {signup, login, logout} from './util/session_api_util'


document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Slack App</h1>, root)

    // for testing
    window.signup = signup;
    window.login = login;
    window.logout = logout;

    window.getState = store.getState;
    window.dispatch = store.dispatch;   
})