import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {logout, workspace} = this.props
            return(
                workspace ? 
                <div className="header">
                    <input type="text" placeholder={`Search ${workspace.name}`} />
                    <button onClick={() => logout()}>Log Out</button>
                </div> : 
                <div className="header">
                    <input type="text" placeholder={`Search WORKSPACE`} />
                    <button onClick={() => logout()}>Log Out</button>
                </div>
            )
    }
}

export default Header