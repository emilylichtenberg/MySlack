@workspaces.each do |workspace|
    json.extract! workspace, :id, :name, :admin_id
end