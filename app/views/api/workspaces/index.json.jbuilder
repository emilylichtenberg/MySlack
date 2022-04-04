@workspaces.each do |workspace|
    json.set! workspace.id do
        json.partial! "api/workspaces/workspace", workspace: workspace
    end
    # json.users do
    #     json.array! @workspace.users, :id, :username
    #  end
    #  json.chats do 
    #      json.array! @workspace.chats, :id, :chat_type, :name, :description, :private, :admin_id, :workspace_id
    #  end
end 
