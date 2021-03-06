class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            puts @user
            login!(@user)
            render 'api/users/show'
        else
            puts @user.errors.full_messages
            render json: ["Invalid username/password"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render 'api/users/show'
        else
            render json: ["Nobody signed in"], status: 404
        end
    end
end
