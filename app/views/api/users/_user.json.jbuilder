json.extract! user, :id, :username
json.workspaces do
    json.array! user.workspaces, :id, :name
end

json.chats do
    json.array! user.chats, :id, :name, :description, :private, :admin_id, :workspace_id
end