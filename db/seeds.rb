# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(username: 'demoUser', display_name: 'demo user', password: '123456')
user2 = User.create!(username: 'emily', display_name: 'Emily L', password: '123456')
user3 = User.create!(username: 'ethang', display_name: 'Ethan G', password: '123456')
user4 = User.create!(username: 'kirby', display_name: 'Kirby N', password: '123456')
user5 = User.create!(username: 'billc', display_name: 'Bill C', password: '123456')
user6 = User.create!(username: 'billk', display_name: 'Bill K', password: '123456')
user7 = User.create!(username: 'ethanl', display_name: 'Ethan L', password: '123456')
user8 = User.create!(username: 'michaell', display_name: 'Michael L', password: '123456')
user9 = User.create!(username: 'sean', display_name: 'Sean M', password: '123456')
user10 = User.create!(username: 'ian', display_name: 'Ian F', password: '123456')
user11 = User.create!(username: 'katieh', display_name: 'Katie H', password: '123456')
user12 = User.create!(username: 'steven', display_name: 'Steven W', password: '123456')
user13 = User.create!(username: 'kenny', display_name: 'Kenny L', password: '123456')

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
converation3 = Conversation.create!(chat_id: 2, user_id: 1)
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
converation25 = Conversation.create!(chat_id: 1, user_id: 3)
converation26 = Conversation.create!(chat_id: 1, user_id: 4)
converation27 = Conversation.create!(chat_id: 1, user_id: 5)
converation28 = Conversation.create!(chat_id: 1, user_id: 6)
converation29 = Conversation.create!(chat_id: 1, user_id: 7)
converation30 = Conversation.create!(chat_id: 1, user_id: 8)
converation31 = Conversation.create!(chat_id: 1, user_id: 9)
converation32 = Conversation.create!(chat_id: 1, user_id: 10)
converation33 = Conversation.create!(chat_id: 1, user_id: 11)
converation34 = Conversation.create!(chat_id: 1, user_id: 12)
converation40 = Conversation.create!(chat_id: 1, user_id: 13)
converation35 = Conversation.create!(chat_id: 2, user_id: 3)
converation36 = Conversation.create!(chat_id: 2, user_id: 4)
converation37 = Conversation.create!(chat_id: 2, user_id: 5)
converation38 = Conversation.create!(chat_id: 2, user_id: 6)
converation39 = Conversation.create!(chat_id: 2, user_id: 7)
# converation40 = Conversation.create!(chat_id: 2, user_id: 8)
converation41 = Conversation.create!(chat_id: 2, user_id: 9)
converation42 = Conversation.create!(chat_id: 2, user_id: 10)
converation43 = Conversation.create!(chat_id: 2, user_id: 11)
converation44 = Conversation.create!(chat_id: 2, user_id: 12)

subscription1 = Subscription.create!(user_id: 1, workspace_id: 1);
subscription2 = Subscription.create!(user_id: 1, workspace_id: 2);
subscription3 = Subscription.create!(user_id: 2, workspace_id: 1);
subscription4 = Subscription.create!(user_id: 2, workspace_id: 2);
subscription5 = Subscription.create!(user_id: 3, workspace_id: 1);
subscription6 = Subscription.create!(user_id: 3, workspace_id: 2);
subscription7 = Subscription.create!(user_id: 4, workspace_id: 1);
subscription8 = Subscription.create!(user_id: 4, workspace_id: 2);
subscription9 = Subscription.create!(user_id: 5, workspace_id: 1);
subscription10 = Subscription.create!(user_id: 5, workspace_id: 2);
subscription11 = Subscription.create!(user_id: 6, workspace_id: 1);
subscription12 = Subscription.create!(user_id: 6, workspace_id: 2);
subscription13 = Subscription.create!(user_id: 7, workspace_id: 1);
subscription14 = Subscription.create!(user_id: 7, workspace_id: 2);
subscription15 = Subscription.create!(user_id: 8, workspace_id: 1);
subscription16 = Subscription.create!(user_id: 8, workspace_id: 2);
subscription17 = Subscription.create!(user_id: 9, workspace_id: 1);
subscription18 = Subscription.create!(user_id: 9, workspace_id: 2);
subscription19 = Subscription.create!(user_id: 10, workspace_id: 1);
subscription20 = Subscription.create!(user_id: 10, workspace_id: 2);
subscription21 = Subscription.create!(user_id: 11, workspace_id: 1);
# subscription22 = Subscription.create!(user_id: 11, workspace_id: 2);
subscription23 = Subscription.create!(user_id: 12, workspace_id: 1);
# subscription24 = Subscription.create!(user_id: 12, workspace_id: 2);
subscription25 = Subscription.create!(user_id: 13, workspace_id: 1);
# subscription26 = Subscription.create!(user_id: 13, workspace_id: 2);