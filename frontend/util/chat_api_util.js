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

export const updateChat = chat => {
    // debugger
    return (
        $.ajax({
            method: 'PATCH',
            url: `/api/chats/${chat.id}`,
            data: {chat}
        })
    )
    
}

export const deleteChat = chatId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/chats/${chatId}`
    })
);