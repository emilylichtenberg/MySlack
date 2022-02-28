import React from "react";
import SplashNav from "./splash_nav";
import SplashBody from "./splash_body";
import SplashNavContainer from './splash_nav_container'
import SplashFooter from "./splash_footer";


class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return(
            <div>
                <SplashNavContainer />
                <SplashBody loginDemo={this.props.loginDemo}/>
                <SplashFooter />
            </div>
        )
    }
}

export default Splash