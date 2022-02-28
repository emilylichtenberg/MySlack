import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="header">
                <input type="text" placeholder="search workspace" />
            </div>
        )
    }
}

export default Header