import React from "react";
import { Link } from "react-router-dom";
import WorkspaceIndexItem from "./workspace_index_item";
// import { fetchWorkspace } from "../../actions/workspace_actions";

class WorkspaceIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const {usersWorkspaces, fetchWorkspace, fetchChat} = this.props
        // debugger
        return (
        
                <ul className="workspace-index">
                    {
                        usersWorkspaces ? 
                            usersWorkspaces.map(workspace => <WorkspaceIndexItem key={workspace.id} 
                                            workspace={workspace} 
                                            fetchWorkspace={fetchWorkspace}
                                            fetchChat={fetchChat}/>)
                            : ''
                    }
                </ul>
            
        ) 
    }
}

export default WorkspaceIndex