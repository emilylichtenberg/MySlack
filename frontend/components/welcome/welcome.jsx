import React from 'react';
import { Link } from 'react-router-dom';


const Welcome = (props) => {
    const { currentUser, logout } = props
  
    const loggedin = () => (
        <div>
            <h2>Welcome {currentUser.displayName}</h2>
            <button onClick={logout}>Log Out</button>
        </div>
    )
    const loggedout = () => (
        <div>
            <Link to='/login'>Login</Link>
            <br />
            <Link to='/signup'>Sign Up</Link>
        </div>
    )

    return currentUser ? loggedin() : loggedout()
};


export default Welcome;

