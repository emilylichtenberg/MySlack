import React from "react"

const SplashFooter = props => (
    <div className="splash-footer">
        <div className="splash-footer-left">
            <p>Emily Lichtenberg</p>
            <p>erlichtenberg@gmail.com</p>
        </div>
        <div className="splash-footer-right">
            <button><a href="https://github.com/emilylichtenberg/mySlack" target="_blank"><i className='fab fa-github fa-3x'></i></a></button>
            <button><a href="https://www.linkedin.com/in/emilylichtenberg/" target="_blank"><i className='fab fa-linkedin fa-3x'></i></a></button>
        </div>
    </div>  
)

export default SplashFooter