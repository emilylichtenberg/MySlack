class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for "chat_channel_#{params['chatId']}"
    self.load 
    # this is specific channel/chat name
  end

  def speak(data)
    message = Message.create(data['message'])
    socket = {message: message, type: 'message'} # type is for reducer?
    ChatChannel.broadcast_to("chat_channel_#{params['chatId']}", socket)
  end

  def load
    chat = Chat.find(params['chatId'])
    messages = chat.messages
    users = chat.users
    socket = { messages: messages, type: 'messages', users: users }
    ChatChannel.broadcast_to("chat_channel_#{params['chatId']}", socket)
  end

  def update(data)
    message = Message.find(data.id)
    message.update(body: data.body)
    socket = {message: message, type: 'message'}
    ChatChannel.broadcast_to("chat_channel_#{params['chatId']}", socket)
  end

  def delete(data)
    message = Message.find(data.id)
    socket = {messageId: message.id, type: 'remove'}
    message.destroy
    ChatChannel.broadcast_to("chat_channel_#{params['chatId']}", socket)
  end
  
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end