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
        // this.props.fetchChats()
    }

    render() {
        const {usersWorkspaces, fetchWorkspace, currentWorkspace, fetchChat, openModal, closeModal, logout, currentWorkspaceId, currentChatId, chats} = this.props
        // debugger
        return(
            <div >
                <div className="header-container">
                    <Header logout={logout} workspace={currentWorkspace}/> 
                </div>
                <div className="full-content-container">
                    <div className="sidenav-container">
                        <div className="workspace-container">
                            <WorkspaceIndex usersWorkspaces={usersWorkspaces} fetchWorkspace={fetchWorkspace} fetchChat={fetchChat} currentWorkspace={currentWorkspace} currentWorkspaceId={currentWorkspaceId}/>
                        </div>
                        <div className="chat-container">
                            <ChatIndex currentWorkspace={currentWorkspace} fetchChat={fetchChat}
                                openModal={openModal} closeModal={closeModal} currentChatId={currentChatId} chats={chats}/>
                        </div>
                    </div>
                    <ChatRoomContainer /> 
                </div>
            </div>
        )
    }
}

export default Workspace
