class UpdateChat < ActiveRecord::Migration[5.2]
  def change
    rename_column :chats, :type, :chat_type
  end
end
