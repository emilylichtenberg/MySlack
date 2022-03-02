class Workspace < ApplicationRecord
    validates :name, :admin_id, presence: true

    belongs_to :admin,
        foreign_key: :admin_id,
        class_name: :User

    has_many :chats,
        foreign_key: :workspace_id,
        class_name: :Chat

    has_many :subscriptions,
        foreign_key: :workspace_id,
        class_name: :Subscription

    has_many :users,
        through: :subscriptions,
        source: :user
end
