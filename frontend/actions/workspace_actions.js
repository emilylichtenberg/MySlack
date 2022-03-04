import * as WorkspaceApiUtil from '../util/workspace_api_util';
export const RECEIVE_WORKSPACES ='RECEIVE_WORKSPACES';
export const RECEIVE_WORKSPACE ='RECEIVE_WORKSPACE';
export const REMOVE_WORKSPACES ='REMOVE_WORKSPACES';

const receiveWorkspaces = workspaces => ({
    type: RECEIVE_WORKSPACES,
    workspaces
})

const receiveWorkspace = workspace => ({
    type: RECEIVE_WORKSPACE,
    workspace
})

const removeWorkspace = workspaceId => ({
    type: REMOVE_WORKSPACES,
    workspaceId
})

export const fetchWorkspaces = () => dispatch => (
    WorkspaceApiUtil.fetchWorkspaces()
        .then(workspaces => dispatch(receiveWorkspaces(workspaces)))
);

export const fetchWorkspace = workspaceId => dispatch => (
    WorkspaceApiUtil.fetchWorkspace(workspaceId)
        .then(workspace => dispatch(receiveWorkspace(workspace)))
);

export const createworkspace = workspace => dispatch => (
    WorkspaceApiUtil.createWorkspace(workspace)
        .then(workspace => dispatch(receiveWorkspace(workspace)))
);

export const deleteworkspace = workspaceId => dispatch => (
    WorkspaceApiUtil.deleteWorkspace(workspaceId)
        .then(() => dispatch(removeWorkspace(workspaceId)))
)