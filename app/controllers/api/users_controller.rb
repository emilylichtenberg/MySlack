class Api::UsersController < ApplicationController
    def create
        # debugger
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            Subscription.create!(user_id: @user.id, workspace_id: 1)
            Subscription.create!(user_id: @user.id, workspace_id: 2)
            Conversation.create!(user_id: @user.id, chat_id: 1)
            Conversation.create!(user_id: @user.id, chat_id: 3)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        if @user
            @workspaces = @user.workspaces
            @chats = @user.chats
            # debugger
            render '/api/users/show'
        else
            render json: ['User does not exist'], status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :display_name)
    end
end
