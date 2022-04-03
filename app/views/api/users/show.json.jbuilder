json.partial! "api/users/user", user: @user

# json.workspaces do 
#   json.array! @workspaces do |workspace|
#     json.id workspace.id
#     json.name workspace.name
#     json.admin_id workspace.admin_id
#   end
# end

# json.chats do
#   json.array! @chats do |chat|
#     json.id chat.id
#     json.chat_type chat.chat_type
#     json.description chat.description
#     json.private chat.private
#     json.admin_id chat.admin_id
#     json.workspace_id chat.workspace_id
#   end
# end