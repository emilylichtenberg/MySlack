import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import ChannelFormContainer from './chats/new_channel_form_container'
import {withRouter} from 'react-router-dom'


class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    // document.addEventListener('keypress', this.esca)
    // debugger
    const {modal, closeModal, workspaceId} = this.props
    if (!modal) {
      return null;
    }
    let component;
    switch (modal) {
      case 'createChannel':
        component = <ChannelFormContainer workspaceId={workspaceId}/>;
        break;
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
    chatId: parseInt(location[4])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));