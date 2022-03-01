class CreateChats < ActiveRecord::Migration[5.2]
  def change
    create_table :chats do |t|
      t.string :type, null: false
      t.string :name
      t.string :description
      t.boolean :private
      t.integer :admin_id
      t.integer :workspace_id
      t.timestamps
    end
  end
end
