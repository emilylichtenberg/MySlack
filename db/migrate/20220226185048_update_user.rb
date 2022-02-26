class UpdateUser < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :email
    rename_column :users, :display_name, :username
  end
end
