import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {logout, workspace, currentUser} = this.props
            return(
                workspace ? 
                <div className="header">
                    <p>{`Welcome, ${currentUser.username}`}</p>
                    <input type="text" placeholder={`${workspace.name}`} disabled/>
                    <button onClick={() => logout()}>Log Out</button>
                </div> : 
                ''
            )
    }
}

export default Header