import React from "react";
import { Link } from "react-router-dom";

class WorkspaceIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     this.props.fetchWorkspace(this.props.workspace.id)

    // }
    // componentDidUpdate() {
    // }


    render () {
        const {workspace, fetchWorkspace, fetchChat, currentWorkspace, currentWorkspaceId} = this.props
        // debugger
        return (
          
                currentWorkspace ? 
                <Link  to={`/workspaces/${workspace.id}/chats/${workspace.chats[0].id}`} 
                    onClick={() => fetchWorkspace(workspace.id)
                            .then(workspace => fetchChat(currentWorkspace.chats[0]))} 
                    className='workspace-link'>
                    <li className='workspace-index-item'>
                        <img src={workspace.imgPath} alt={workspace.name} />
                    </li>
                </Link> : 
                <Link  to={`/workspaces/${workspace.id}`} 
                    onClick={() => fetchWorkspace(workspace.id)}
                    className='workspace-link'>
                    <li className={workspace.id === currentWorkspaceId ?
                        'workspace-index-item active' : 'workspace-index-item'}>
                        <img src={workspace.imgPath} alt={workspace.name} />
                    </li>
                </Link>
        )
    }
}

export default WorkspaceIndexItem