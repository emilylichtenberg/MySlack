import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {logout} from '../../actions/session_actions'

class LogoutDD extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    dispatch(logout());
    this.props.closeModal();
  }

  render () {
    // debugger
    const {currentUser, currentWorkspace} = this.props;
    return (
      <div>
        <div className="logout-contact">
          <p><FontAwesomeIcon icon={faUser} className="user-icon-logout" onClick={() => dispatch(openModal('logoutDD'))}/></p>
          <div>
            <p className="logout-display">{currentUser.displayName}</p>
            <p className="logout-username">{`@${currentUser.username}`}</p>
          </div>
        </div>
        <div className="logout-button-container">
          <p className="logout-button" onClick={this.handleLogout}>{`Sign out of ${currentWorkspace?.name}`}</p>
        </div>
      </div>
    )
  }
}

export default LogoutDD