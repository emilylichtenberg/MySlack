json.extract! workspace, :id, :name, :admin_id, :img_path
json.chats do
    json.array! workspace.chats, :id
end