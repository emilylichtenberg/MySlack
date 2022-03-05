import React from "react";
import { Link } from "react-router-dom";
import WorkspaceIndexItem from "./workspace_index_item";
// import { fetchWorkspace } from "../../actions/workspace_actions";

class WorkspaceIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const {usersWorkspaces, fetchWorkspace} = this.props
        return (
            <div>
                <ul>
                    {
                        usersWorkspaces ? 
                            usersWorkspaces.map(workspace => <WorkspaceIndexItem workspace={workspace} fetchWorkspace={fetchWorkspace}/>)
                            : ''
                    }
                </ul>
            </div>
        ) 
    }
}

export default WorkspaceIndex