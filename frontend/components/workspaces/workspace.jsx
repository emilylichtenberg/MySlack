import React from "react";
import WorkspaceIndex from "./workspace_index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'

class Workspace extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchWorkspace(this.props.currentWorkspace.id)
    }

    render() {
        const {usersWorkspaces, fetchWorkspace} = this.props
        return(
            <div className="workspace-container">
                {/* <h1 className="workspace-name">App Academy</h1> */}
                {/* make UL and make display none other than active workspace */}
                {/* <button><FontAwesomeIcon icon={faPenToSquare} className='create-workspace-icon'/></button> */}
                <WorkspaceIndex usersWorkspaces={usersWorkspaces} fetchWorkspace={fetchWorkspace}/>
                {/* <ChatIndex />
                <ChatRoom />  */}
            </div>
        )
    }
}

export default Workspace