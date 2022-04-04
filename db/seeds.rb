# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create!(username: 'demoUser', password: '123456')
user2 = User.create!(username: 'Emily L', password: '123456')
user3 = User.create!(username: 'Ethan G', password: '123456')
user3 = User.create!(username: 'Kirby N', password: '123456')
user4 = User.create!(username: 'Bill C', password: '123456')
user5 = User.create!(username: 'Bill K', password: '123456')
user6 = User.create!(username: 'Ethan L', password: '123456')

workspace1 = Workspace.create!(name: 'App Academy', admin_id: 1, img_path: 'https://raw.githubusercontent.com/emilylichtenberg/MySlack/main/app/assets/images/aalogo.png')
workspace2 = Workspace.create!(name: 'Slack', admin_id: 2, img_path: 'https://raw.githubusercontent.com/emilylichtenberg/MySlack/main/app/assets/images/SlackIcon.png')

chat1 = Chat.create!(chat_type: 'channel', name: 'general', description: 'Company-wide announcements and work-based matters', private: false, admin_id: 2, workspace_id: 1)
chat2 = Chat.create!(chat_type: 'channel', name: '2021-11-29-ny', description: 'the best cohort', private: true, admin_id: 2, workspace_id: 1)
chat3 = Chat.create!(chat_type: 'channel', name: 'general', description: 'Company-wide announcements and work-based matters', private: false, admin_id: 2, workspace_id: 2)
chat4 = Chat.create!(chat_type: 'channel', name: 'slacking-off', description: 'For when you need a break in the day', private: true, admin_id: 2, workspace_id: 2)
chat5 = Chat.create!(chat_type: 'DM', name: '1', workspace_id: 1)
chat6 = Chat.create!(chat_type: 'GM', name: '2', workspace_id: 1)
chat7 = Chat.create!(chat_type: 'GM', name: '3', workspace_id: 1)
chat8 = Chat.create!(chat_type: 'GM', name: '4', workspace_id: 1)
chat9 = Chat.create!(chat_type: 'DM', name: '5', workspace_id: 1)

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
# converation3 = Conversation.create!(chat_id: 2, user_id: 1)
converation4 = Conversation.create!(chat_id: 2, user_id: 2)
converation5 = Conversation.create!(chat_id: 3, user_id: 1)
converation6 = Conversation.create!(chat_id: 3, user_id: 2)
converation7 = Conversation.create!(chat_id: 4, user_id: 1)
converation8 = Conversation.create!(chat_id: 4, user_id: 2)
converation9 = Conversation.create!(chat_id: 5, user_id: 1)
converation10 = Conversation.create!(chat_id: 5, user_id: 2)
converation11 = Conversation.create!(chat_id: 6, user_id: 1)
converation12 = Conversation.create!(chat_id: 6, user_id: 2)
converation13 = Conversation.create!(chat_id: 6, user_id: 3)
converation14 = Conversation.create!(chat_id: 6, user_id: 4)
converation15 = Conversation.create!(chat_id: 6, user_id: 5)
converation16 = Conversation.create!(chat_id: 7, user_id: 1)
converation17 = Conversation.create!(chat_id: 7, user_id: 2)
converation18 = Conversation.create!(chat_id: 7, user_id: 3)
converation19 = Conversation.create!(chat_id: 8, user_id: 1)
converation20 = Conversation.create!(chat_id: 8, user_id: 4)
converation21 = Conversation.create!(chat_id: 8, user_id: 5)
converation22 = Conversation.create!(chat_id: 8, user_id: 6)
converation23 = Conversation.create!(chat_id: 9, user_id: 1)
converation24 = Conversation.create!(chat_id: 9, user_id: 3)

subscription1 = Subscription.create!(user_id: 1, workspace_id: 1);
subscription2 = Subscription.create!(user_id: 1, workspace_id: 2);
subscription3 = Subscription.create!(user_id: 2, workspace_id: 1);
subscription4 = Subscription.create!(user_id: 2, workspace_id: 2);