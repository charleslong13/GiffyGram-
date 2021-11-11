import { getMessages, getUsers, getCurrentUser, patchMessageBoolean} from "../data/provider.js"

export const MessageList = () => {
    const users = getUsers()
    const userUnreadMessages = userUnreadMessages()

    return`
    <div class="messages">
        ${userUnreadMessages.map(message => {//map through the applicable messages to display HTML for each. 
            const foundUser = users.find(user => user.id === message.userId)//find user object to obtain name value
            return`<div class="messageList">
                <div class="message" id="message--${message.id}">
                        <div class="message__author">${foundUser.name}</div>
                        <div class="message__text">${message.text}</div>
                </div>
            </div>`
        })}
        
    </div>`
}

export const userUnreadMessages = () => {
    const messages = getMessages()
    const currentUser = getCurrentUser()

    //create an array of message objects that do not have the "read" key, and thus are unread.
    const unreadArray = messages.filter(message => !message.read)
    //check through unread messages and filter out those that were sent to the current user, store in an array
    return unreadArray.filter(unreadMessage => unreadMessage.recipientId === currentUser.currentUserId)
}