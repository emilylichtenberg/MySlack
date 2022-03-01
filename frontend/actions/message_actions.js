export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'

export const receiveMessage = message => ({
    type: RECEIVE_MESSAGE,
    message
});

export const receiveMessages = messages => ({
    type: RECEIVE_MESSAGES,
    messages
});

export const removeMessage = messageId => ({
    type: REMOVE_MESSAGE,
    messageId
});
