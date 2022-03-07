import React from "react";
import { Link } from "react-router-dom";
import WorkspaceIndexItem from "./workspace_index_item";
// import { fetchWorkspace } from "../../actions/workspace_actions";

class WorkspaceIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.fetchWorkspaces()
    }

    componentDidUpdate() {
    }

    render () {
        const {usersWorkspaces, fetchWorkspace, fetchChat, currentWorkspace, currentWorkspaceId, workspaces} = this.props
        console.log(workspaces)
        // debugger
        return (
                <ul className="workspace-index">
                    {
                        workspaces ? 
                            Object.values(workspaces).map(workspace => <WorkspaceIndexItem key={workspace.id} 
                                            workspace={workspace} 
                                            fetchWorkspace={fetchWorkspace}
                                            fetchChat={fetchChat}
                                            currentWorkspace={currentWorkspace}
                                            currentWorkspaceId={currentWorkspaceId}/>)
                            : ''
                    }
                </ul>
            
        ) 
    }
}

export default WorkspaceIndex