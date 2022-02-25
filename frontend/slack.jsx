import React from "react";
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from './components/root'


import {signup, login, logout} from './util/session_api_util' //testing


document.addEventListener('DOMContentLoaded', () => {

    let preloadedState
    if (window.currentUser) {
        preloadedState = {
            session: {id: window.currentUser.id},
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
            }
        }
    } else {
        preloadedState = {}
    }
    const store = configureStore(preloadedState);

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root)

    // for testing
    window.signup = signup;
    window.login = login;
    window.logout = logout;

    window.getState = store.getState;
    window.dispatch = store.dispatch;   
})
