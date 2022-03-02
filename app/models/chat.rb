class Chat < ApplicationRecord
    def is_channel
         chat_type == `channel`
    end
    validates :name, :description, :private, :admin_id, presence: true, if: :is_channel
    validates :name, uniqueness: true, if: :is_channel
    
    validates :workspace_id, presence: true

    belongs_to :admin,
        foreign_key: :admin_id,
        class_name: :User

    belongs_to :workspace,
        foreign_key: :workspace_id,
        class_name: :Workspace
    
    has_many :conversations,
        foreign_key: :chat_id,
        class_name: :Conversation
    
    has_many :users,
        through: :conversation,
        source: :user
    
end
