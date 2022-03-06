json.extract! workspace, :id, :name, :admin_id
json.chats do
    json.array! workspace.chats, :id
end