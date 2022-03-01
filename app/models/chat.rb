class Chat < ApplicationRecord
    def is_channel
         chat_type == `channel`
    end
    validates :name, :description, :private, :admin_id, presence: true, if: :is_channel
        # add workspace id validation
    validates :name, uniqueness: true, if: :is_channel

    # belongs_to :admin,
    #     foreign_key: :admin_id,
    #     class_name: :User

    # belongs_to :workspace,
    #     foreign_key: :workspace_id,
    #     class_name: :Workspace
    
end
