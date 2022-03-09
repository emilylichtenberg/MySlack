# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create!(username: 'demoUser', password: '123456')
user2 = User.create!(username: 'emily', password: '123456')
user3 = User.create!(username: 'ethan', password: '123456')
user3 = User.create!(username: 'kirby', password: '123456')

workspace1 = Workspace.create!(name: 'App Academy', admin_id: 1, img_path: 'https://raw.githubusercontent.com/emilylichtenberg/MySlack/main/app/assets/images/aalogo.png')
workspace2 = Workspace.create!(name: 'Slack', admin_id: 2, img_path: 'https://raw.githubusercontent.com/emilylichtenberg/MySlack/main/app/assets/images/SlackIcon.png')

chat1 = Chat.create!(chat_type: 'channel', name: 'general', description: 'for general discussion', private: false, admin_id: 1, workspace_id: 1)
chat2 = Chat.create!(chat_type: 'channel', name: '2021-11-29-ny', description: 'test', private: true, admin_id: 1, workspace_id: 1)
chat3 = Chat.create!(chat_type: 'channel', name: 'general', description: 'for general discussion', private: false, admin_id: 1, workspace_id: 2)
chat4 = Chat.create!(chat_type: 'channel', name: 'slacking-off', description: 'test', private: true, admin_id: 1, workspace_id: 2)
chat3 = Chat.create!(chat_type: 'DM', name: '1', workspace_id: 1)
chat4 = Chat.create!(chat_type: 'GM', name: '2', workspace_id: 1)

message1 = Message.create!(body: 'message1', chat_id: 1, sender_id: 1)
message2 = Message.create!(body: 'message2', chat_id: 1, sender_id: 2)
message3 = Message.create!(body: 'message3', chat_id: 2, sender_id: 1)
message4 = Message.create!(body: 'message4', chat_id: 2, sender_id: 2)
message5 = Message.create!(body: 'message5', chat_id: 3, sender_id: 1)
message6 = Message.create!(body: 'message6', chat_id: 3, sender_id: 2)
message7 = Message.create!(body: 'message7', chat_id: 4, sender_id: 1)
message8 = Message.create!(body: 'message8', chat_id: 4, sender_id: 2)

converation1 = Conversation.create!(chat_id: 1, user_id: 1)
converation2 = Conversation.create!(chat_id: 1, user_id: 2)
converation3 = Conversation.create!(chat_id: 2, user_id: 1)
converation4 = Conversation.create!(chat_id: 2, user_id: 2)
converation5 = Conversation.create!(chat_id: 3, user_id: 1)
converation6 = Conversation.create!(chat_id: 3, user_id: 2)
converation7 = Conversation.create!(chat_id: 4, user_id: 1)
converation8 = Conversation.create!(chat_id: 4, user_id: 2)

subscription1 = Subscription.create!(user_id: 1, workspace_id: 1);
subscription2 = Subscription.create!(user_id: 1, workspace_id: 2);
subscription3 = Subscription.create!(user_id: 2, workspace_id: 1);
subscription4 = Subscription.create!(user_id: 2, workspace_id: 2);
