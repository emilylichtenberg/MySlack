import React from "react";
import { Link } from "react-router-dom";

const WorkspaceIndexItem = ({workspace, fetchWorkspace}) => {
    return (
        <Link key={workspace.id} to={`/workspaces/${workspace.id}`} onClick={() => fetchWorkspace(workspace.id)}>
            <li>
                {workspace.name}
            </li>
        </Link>
    )
}

export default WorkspaceIndexItem