class Workspace < ApplicationRecord
    validates :name, :admin_id, presence: true

    belongs_to :admin,
        foreign_key: :admin_id,
        class_name: :User

    has_many :chats,
        foreign_key
end
