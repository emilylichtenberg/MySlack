import React from "react"

const SplashFooter = props => (
    <div className="splash-footer">
        <div className="splash-footer-left">
            {/* <p>Emily Lichtenberg</p> */}
            <p className="email"><a href="https://emilylichtenberg.github.io/" target="_blank" ><span className="email">Emily Lichtenberg</span></a></p>
            <p className="email"><a href="mailto:erlichtenberg@gmail.com" target="_blank" ><span className="email">erlichtenberg@gmail.com</span></a></p>
            
        </div>
        <div className="splash-footer-right">
            <button><a href="https://github.com/emilylichtenberg/mySlack" target="_blank"><i className='fab fa-github fa-2x'></i></a></button>
            <button><a href="https://www.linkedin.com/in/emilylichtenberg/" target="_blank"><i className='fab fa-linkedin fa-2x'></i></a></button>
        </div>
    </div>  
)

export default SplashFooter