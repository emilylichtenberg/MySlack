class Api::WorkspacesController < ApplicationController
    def create
        @workspace = Workspace.new(workspace_params) 
        #admin_id comes as params from form based on currentUser
        if @workspace.save
            render '/api/workspaces/show'
        else
            render json: @workspace.errors.full_messages
        end
    end

    def destroy
        @workspace = Workspace.find(params[:id])
        @workspace.destroy
        @workspaces = Workspace.all
        render '/api/workspaces/index'
    end

    def index
        @workspaces = Workspace.all
        render '/api/workspaces/index'
    end

    private
    def workspace_params
        params.require(:workspace).permit(:name, :admin_id)
    end
end
