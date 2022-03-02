export const fetchChats = () => (
    $.ajax({
        method: 'GET',
        url: '/api/chats'
    })
);

export const fetchChat = chatId => (
    $.ajax({
        method: 'GET',
        url: `/api/chats/${chatId}`
    })
);

export const createChat = chat => (
    $.ajax({
        method: 'POST',
        url: '/api/chats',
        data: {chat}
    })
);

export const deleteChat = chatId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/chats/${chatId}`
    })
);