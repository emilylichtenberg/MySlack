import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faU, faUser} from '@fortawesome/free-solid-svg-icons'
import {openModal} from '../../actions/modal_actions'

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
                    {/* <button onClick={() => logout()}>Log Out</button> */}
                    <p><FontAwesomeIcon icon={faUser} className="user-icon-logout" onClick={() => dispatch(openModal('logoutDD'))}/></p>
                </div> : 
                ''
            )
    }
}

export default Header