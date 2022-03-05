import * as ChatApiUtil from '../util/chat_api_util'
export const RECEIVE_CHATS = 'RECEIVE_CHATS';
export const RECEIVE_CHAT = 'RECEIVE_CHAT';
export const REMOVE_CHAT = 'REMOVE_CHAT';
export const RECEIVE_CHAT_ERRORS = 'RECEIVE_CHAT_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS'

const receiveChats = chats => ({
    type: RECEIVE_CHATS,
    chats
})

const receiveChat = chat => ({
    type: RECEIVE_CHAT,
    chat
})

const removeChat = chatId => ({
    type: REMOVE_CHAT,
    chatId
})

const receiveChatErrors = errors => ({
    type: RECEIVE_CHAT_ERRORS,
    errors: errors.responseJSON
})

export const removeChatErrors = () => ({
    type: REMOVE_ERRORS
})

export const fetchChats = () => dispatch => (
    ChatApiUtil.fetchChats()
        .then(chats => dispatch(receiveChats(chats)))
        .fail(errors => dispatch(receiveChatErrors(errors))) 
);

export const fetchChat = chatId => dispatch => (
    ChatApiUtil.fetchChat(chatId)
        .then(chat => dispatch(receiveChat(chat)))
        .fail(errors => dispatch(receiveChatErrors(errors)))
);

export const createChat = chat => dispatch => (
    ChatApiUtil.createChat(chat)
        .then(chat => dispatch(receiveChat(chat)))
        .fail(errors => dispatch(receiveChatErrors(errors)))
);

export const deleteChat = chatId => dispatch => (
    ChatApiUtil.deleteChat(chatId)
        .then(() => dispatch(removeChat(chatId)))
)