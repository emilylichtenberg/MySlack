class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            Subscription.create!(user_id: @user.id, workspace_id: 1)
            Subscription.create!(user_id: @user.id, workspace_id: 2)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        if @user
            render '/api/users/show'
        else
            render json: ['User does not exist'], status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
