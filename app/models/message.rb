class Message < ApplicationRecord
    validates :body, presence: true
    belongs_to :sender,
        foreign_key: :sender_id,
        class_name: :User
    belongs_to :parent_message,
        optional: true,
        foreign_key: :parent_message_id,
        class_name: :Message
    belongs_to :chat,
        foreign_key: :chat_id,
        class_name: :Chat
end
