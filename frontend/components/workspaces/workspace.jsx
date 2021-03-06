import React from "react";
import WorkspaceIndex from "./workspace_index";
import ChatIndex from "../chats/chats_index";
import Header from '../header/header'
import ChatRoomContainer from '../action_cable/chat_room_container'
import ChatIndexContainer from '../chats/chats_index_container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'

class Workspace extends React.Component {
    constructor(props) {
        // debugger
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.fetchWorkspace(this.props.match.params.workspaceId)
        this.props.fetchChats()
        // this.props.fetchWorkspaces()
        // this.props.fetchChats()
    }

    render() {
        const {currentUser, fetchWorkspace, fetchWorkspaces, currentWorkspace, fetchChat, openModal, closeModal, logout, currentWorkspaceId, currentChatId, chats, workspaces} = this.props
        // debugger
        return(
            <div className="full-workspace-container">
                <div className="header-container">
                    <Header logout={logout} workspace={currentWorkspace} currentUser={currentUser}/> 
                </div>
                <div className="full-content-container">
                    <div className="sidenav-container">
                        <div className="workspace-container">
                            <WorkspaceIndex chats={chats} workspaces={workspaces} fetchWorkspace={fetchWorkspace} fetchWorkspaces={fetchWorkspaces} fetchChat={fetchChat} currentWorkspace={currentWorkspace} currentWorkspaceId={currentWorkspaceId}/>
                        </div>
                        <div className="chat-container">
                            <ChatIndex currentWorkspace={currentWorkspace} fetchChat={fetchChat}
                                openModal={openModal} closeModal={closeModal} currentChatId={currentChatId} chats={chats} currentUser={currentUser}/>
                        </div>
                    </div>
                    <ChatRoomContainer /> 
                </div>
            </div>
        )
    }
}

export default Workspace
