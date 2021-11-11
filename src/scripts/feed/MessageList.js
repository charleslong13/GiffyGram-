import {getUsers, getUserUnreadMessages} from "../data/provider.js"



export const MessageList = () => {
    const users = getUsers()
    const userUnreadMessages = getUserUnreadMessages()

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