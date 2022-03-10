import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from '../../../app/assets/images/SlackIcon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faHockeyPuck, faMusic } from "@fortawesome/free-solid-svg-icons";

const SplashNav = ({logout, loginDemo, currentUser}) => {
    const loggedOut = () => (
        <div className='splash-nav'>
            <div className="nav-left">
                <Link to='/' className='nav-slackLogo'>
                    <img className="nav-logo-image" src={window.SlackIcon} alt="logo" />
                    <h2>mySlack</h2>
                </Link>
                {/* <p className='about-me'>About Me</p> */}
                <div className="about-me">
                    <span>About Me</span>
                    <div className="about-me-dropdown-content">
                        <p><FontAwesomeIcon icon={faFire} /><span>   Survivor </span>superfan</p>
                        <p><FontAwesomeIcon icon={faHockeyPuck} />   New York Rangers enthusiast</p>
                        <p><FontAwesomeIcon icon={faMusic} />   Classical piano player</p>
                    </div>
                </div>
            </div>
            <div className="nav-right">
                <Link className='nav-signin' to='/signin'>Sign In</Link>
                <Link className='nav-signup' to='/signup'>Sign Up</Link>
                <button className='nav-demologin' onClick={() => loginDemo()}>TRY A DEMO</button>
            </div>
        </div>
    )
    const loggedIn = () => (
        <div className='splash-nav'>
            <div className="nav-left">
                <Link to='/' className='nav-slackLogo'>
                    <img className="nav-logo-image" src={logo} alt="logo" />
                    <h2>mySlack</h2>
                </Link>
                <p className='about-me'>About Me</p>
            </div>
            <div className="nav-right">
                <button className='nav-logout' onClick={() => logout()}>Log Out</button>
            </div>
        </div>
    )

    return(
            currentUser ? loggedIn() : loggedOut()
    )
}

export default SplashNav