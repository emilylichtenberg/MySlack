class Subscription < ApplicationRecord
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :workspace,
        foreign_key: :workspace_id,
        class_name: :Workspace
end
