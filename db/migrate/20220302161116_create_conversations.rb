class CreateConversations < ActiveRecord::Migration[5.2]
  def change
    create_table :conversations do |t|
      t.integer :chat_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
