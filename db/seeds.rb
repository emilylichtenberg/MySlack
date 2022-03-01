# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create!(username: 'demoUser', password: '123456')
user2 = User.create!(username: 'emily', password: '123456')

chat1 = Chat.create!(chat_type: 'channel', name: 'general', description: 'for general discussion', private: false, admin_id: 1)
chat2 = Chat.create!(chat_type: 'channel', name: 'test', description: 'test', private: false, admin_id: 1)

