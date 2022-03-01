import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {logout} = this.props
        return(
            <div className="header">
                <input type="text" placeholder="search workspace" />
                <button onClick={() => logout()}>Log Out</button>
            </div>
        )
    }
}

export default Header