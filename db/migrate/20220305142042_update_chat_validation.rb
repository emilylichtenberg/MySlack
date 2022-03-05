class UpdateChatValidation < ActiveRecord::Migration[5.2]
  def change
    add_index :chats, [:name, :workspace_id], unique: true
  end
end
