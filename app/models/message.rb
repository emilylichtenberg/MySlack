class Message < ApplicationRecord
    validates :body, presence: true
    # belongs_to :sender,
    #     foreign_key: :sender_id,
    #     class_name: :User
end
