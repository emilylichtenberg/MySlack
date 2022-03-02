class Conversation < ApplicationRecord
    belongs_to :chat,
        foreign_key: :chat_id,
        class_name: :Chat
    
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end
