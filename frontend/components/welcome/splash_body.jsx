import React from "react";

const SplashBody = (props) => {

    return(
        <div className='splash-body-total'>
            <div className="splash-body-1">
                <div className="splash-body-1-left">
                    <p id="sb1l-mySlack">mySlack is your</p>
                    <p id="sb1l-digital">digital HQ</p>
                    <p id="sb1l-paragraph">Transform the way you work with one place for everyone and everything you need to get stuff done.</p>
                    <button id="sb1l-button" onClick={() => props.loginDemo()}>TRY A DEMO</button>
                </div>
                <div className="splash-body-1-right">
                    
                </div>
            </div>

            <div className="splash-body-2">
                <p id='sb2-header'>Teams large and small rely on mySlack</p>
                <div className="mySlack-stats">
                    <div id="stat-1">
                        <span>75%</span>
                        <p> of users depend on mySlack to get work done</p>
                    </div>
                    <div id="stat-2">
                        <span>84%</span>
                        <p> feel more connected to their teams</p>
                    </div>
                    <div id="stat-3">
                        <span>91%</span>
                        <p> feel their ability to work remotely has improved</p>
                    </div>
                </div>
            </div>

            <div className="splash-body-3">
                <div className="splash-3-left">

                </div>
                <div className="splash-3-right">
                    <p id="s3r-header">Move faster by organizing your work life</p>
                    <p id="s3r-body">The key to productivity in Slack is organized spaces called channels—a different one for everything you’re working on. With all the people, messages and files related to a topic in one place, you can move a whole lot faster.</p>
                </div>
            </div>

            
        </div>
    )
}

export default SplashBody