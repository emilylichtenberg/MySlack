import React from "react";
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from './components/root'

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
    ReactDOM.render(<Root store={store}/> , root)

    

    window.getState = store.getState;
    window.dispatch = store.dispatch;   
})

// document.addEventListener('keydown', (e) => {
//     if (e.key === 'escape') {
//         console.log('escape pressed')
//     }
// })