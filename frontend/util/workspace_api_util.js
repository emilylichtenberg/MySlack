export const fetchWorkspaces = () => (
    $.ajax({
        method: 'GET',
        url: '/api/workspaces'
    })
);

export const fetchWorkspace = workspaceId => (
    $.ajax({
        method: 'GET',
        url: `/api/workspaces/${workspaceId}`
    })
);

export const createWorkspace = workspace => (
    $.ajax({
        method: 'POST',
        url: '/api/workspaces',
        data: {workspace}
    })
);

export const updateWorkspace = workspace => (
    $.ajax({
        method: 'PATCH',
        url: `/api/workspaces/${workspace.id}`,
        data: {workspace}
    })
);

export const deleteWorkspace = workspaceId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/workspaces/${workspaceId}`
    })
)