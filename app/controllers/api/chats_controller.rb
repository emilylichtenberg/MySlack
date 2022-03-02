class Api::ChatsController < ApplicationController
    def create
        @chat = Chat.new(chat_params)
        if @chat.save
            render '/api/chats/show'
        else
            render json: @chat.errors.full_messages
        end
    end

    def index
        @chats = Chat.all
        render '/api/chats/index'
    end

    private
    def chat_params
        params.require(:chat).permit(:chat_type, :name, :description, :private, :admin_id, :workspace_id)
    end

end
