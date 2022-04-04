class Api::ChatsController < ApplicationController
    def index
        # @chats = Chat.all
        @chats = current_user.chats
        render '/api/chats/index'
    end

    def show
        @chat = Chat.find(params[:id])
        if @chat
            render '/api/chats/show'
        else
            render json: ['Chat does not exist'], status: 422
        end
    end

    def create
        @chat = Chat.new(chat_params)
        
        if @chat.chat_type != 'channel'
            @chat.name = SecureRandom::urlsafe_base64
        end

        if @chat.save
            # debugger
            Conversation.create!(chat_id: @chat.id, user_id: @chat.admin_id)
            render '/api/chats/show'
        else
            render json: @chat.errors.full_messages, status: 401
        end
    end

    def update
        @chat = Chat.find(params[:id])
        if @chat.update(chat_params)
            render '/api/chats/show'
        else
            render json: @chat.errors.full_messages, status: 401
        end
    end

    def destroy
        # debugger
        @chat = Chat.find(params[:id])
        @chat.destroy
    end

    private
    def chat_params
        params.require(:chat).permit(:chat_type, :name, :description, :private, :admin_id, :workspace_id)
    end

end
