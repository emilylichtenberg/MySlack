import React from "react";
import { Link } from "react-router-dom";

class WorkspaceIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        // this.props.fetchWorkspace(this.props.workspace.id)
    }

    render () {
        const {workspace, fetchWorkspace, fetchChat} = this.props
        // debugger
        return (
            <Link  to={`/workspaces/${workspace.id}/chats/${workspace.chats[0].id}`} 
                onClick={() => fetchWorkspace(workspace.id)
                        .then(fetchChat(workspace.chats[0]))} 
                className='workspace-link'>
                <li className='workspace-index-item'>
                    {workspace.name}
                </li>
            </Link>
        )
    }
}

export default WorkspaceIndexItem