json.extract! chat, :id, :chat_type, :name, :description, :private, :admin_id, :workspace_id
json.messages do
    json.array! chat.messages, :id, :body, :sender_id
end
json.users do
    json.array! chat.users, :id, :username, :display_name
end