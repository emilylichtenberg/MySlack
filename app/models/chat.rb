class Chat < ApplicationRecord
    validates :chat_type, inclusion: {in: %w(channel DM GM)}

    validates :private, inclusion: [true, false], if: :is_channel?
    validates :name, :description, :admin_id, presence: true, if: :is_channel?
    validates :name, uniqueness: {scope: :workspace_id}, if: :is_channel?
    def is_channel?
         chat_type == `channel`
    end

    validates :workspace_id, presence: true

    belongs_to :admin,
        foreign_key: :admin_id,
        optional: true,
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
