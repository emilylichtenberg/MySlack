class Updateworkspaces < ActiveRecord::Migration[5.2]
  def change
    add_column :workspaces, :img_path, :string
  end
end
