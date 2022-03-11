[mySlack](https://my-slack-clone-1.herokuapp.com/#/) is a clone of Slack - an online platform that allows teams to connect and communicate with each other through channels, group messages or direct messages.

## Technologies
The main technology used in this project is Action Cable.  Action Cable is a framework that integrates WebSockets with a Rails backend.  It is similar to an HTTP request but maintains state and therefore allows multidirectional communicaton.  This is crucial for allowing users to see messages from users on another browser in real time instead of waiting to see the update when they refresh the page.  

A major different between a standard Rails backend and Action Cable is the use of a Channel instead of a Controller.  A user can *subscribe* and *unsubscribe* to channels to see messages, and can *speak* to a channel to send a message.  

## Action Cable Subscriptions
```rb
# app/channels/chat_channel.rb
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
    socket = { messages: messages, type: 'messages'}
    ChatChannel.broadcast_to("chat_channel_#{params['chatId']}", socket)
  end
end
```

```jsx
class ChatRoom extends React.Component {

    createSubscription () {
            App.cable.subscriptions.create(
                {channel: 'ChatChannel', chatId: this.props.chatId},
                {
                    received: data => {
                        switch (data.type) {
                        case "message":
                            this.props.receiveMessage(data.message);
                            break;
                        case "messages":
                            this.props.receiveMessages(data.messages)
                            break;
                        case "remove":
                            this.props.removeMessage(data.messageId)
                        }
                    },
                    speak: function(data) {
                        return this.perform('speak', data);
                    },
                    load: function() {
                        return this.perform('load');
                    },
                    update: function(data) {
                        return this.perform('update', data);
                    },
                    delete: function(data) {
                        return this.perform('delete', data);
                    },
                }
            );
        }

}
```
Above you can see the basic set up of Action Cable.  The Chat Channel is set up to mimic a controller and is what determines the backend actions.  The Chat Room Component creates the subscription with frontend functions that call on the backend actions when invoked.  

When a user clicks on a chat, it first checks if a subscription to that channel already exists.  If no subscription exists, it creates one with the code snippet above.  Otherwise, it calls on the load function for the correct subscription. 

## New Channel Creation
One CRUD cycle for the application is for Channels.  
```jsx
// frontend/components/channels/channel_form.jsx
handleSubmit(e) {
    e.preventDefault();
    let submitForm = async () => this.props.action(this.state);
    submitForm()
        .then(channel => {
            this.props.history.push({pathname: `/workspaces/${this.state.workspace_id}/chats/${channel.chat.id}`})
        })
        .then(() => this.props.removeChatErrors())
        .then(() => this.props.closeModal())

}
```

## Next Steps
Next Steps / future implementation
- index pages for all channels that user can browse and join. use of action cable connect auth to make sure user is allowed to broadcast thaht chan
- DMs/ group messages, use associations in back end to have approriate list of messages to render on chat index.  will not have browse all functionalirt here since all private
- ability to add new workspaces
- custom profile
