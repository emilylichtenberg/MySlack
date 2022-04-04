import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import NewChannelFormContainer from './chats/new_channel_form_container';
import EditChannelFormContainer from './chats/edit_channel_form_container';
import NewDMFormContainer from './chats/new_dm_form_container'
import DeleteMessageModal from './action_cable/delete_message_modal';
import {withRouter} from 'react-router-dom';


class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const {modal, closeModal, workspaceId, chatId, allUsers} = this.props
    if (!modal) {
      return null;
    }
    let component;
    switch (modal) {
      case 'createChannel':
        component = <NewChannelFormContainer workspaceId={workspaceId}/>;
        break;
      case 'editChannel':
        // debugger
        component = <EditChannelFormContainer chatId={chatId}/>
        break;
      case 'newDM':
        component = <NewDMFormContainer workspaceId={workspaceId} />;
        return (
          <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
          </div>
        )
      case modal:
        component = <DeleteMessageModal message={modal} users={allUsers} closeModal={closeModal}/>;
        return (
          <div className="modal-background" onClick={closeModal}>
            <div className="modal-child_message" onClick={e => e.stopPropagation()}>
                {component}
            </div>
          </div>
        )
      default:
        return null;
    }
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  // debugger
  let location = ownProps.location.pathname.split('/')
  return {
    modal: state.ui.modal,
    workspaceId: parseInt(location[2]),
    chatId: parseInt(location[4]),
    allUsers: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));