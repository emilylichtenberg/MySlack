@workspaces.each do |workspace|
    json.set! workspace.id do
        json.extract! workspace, :id, :name, :admin_id
    end
end