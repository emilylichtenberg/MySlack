class CreateWorkspaces < ActiveRecord::Migration[5.2]
  def change
    create_table :workspaces do |t|

      t.timestamps
    end
  end
end
