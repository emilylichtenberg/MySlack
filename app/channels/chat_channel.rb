class ChatChannel < ApplicationCable::Channel
  def subscribed
    # create a subscription for a specific chat
    stream_for "chat_channel_#{params['chatId']}"
    self.load 
  end
  
  def speak(data)
    # create a message in our backend and broadcast to a specific chat
    message = Message.create(data['message'])
    socket = {message: message, type: 'message'}
    ChatChannel.broadcast_to("chat_channel_#{params['chatId']}", socket)
  end

  def load
    # find a chat based on params and load all messages in chat based on associations
    chat = Chat.find(params['chatId'])
    messages = chat.messages
    users = chat.users
    socket = { messages: messages, type: 'messages'}
    ChatChannel.broadcast_to("chat_channel_#{params['chatId']}", socket)
      # this info goes to our redux state
      # broadcast to calls received in subscription create CDM.
  end

  def update(data)
    message = Message.find(data['id'])
    message.update(body: data['body'])
    socket = {message: message, type: 'message'}
    ChatChannel.broadcast_to("chat_channel_#{params['chatId']}", socket)
  end

  def delete(data)
    message = Message.find(data['id'])
    socket = {messageId: message.id, type: 'remove'}
    message.destroy
    ChatChannel.broadcast_to("chat_channel_#{params['chatId']}", socket)
  end
  
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
