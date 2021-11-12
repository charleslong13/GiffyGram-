<<<<<<< HEAD
import { getCorrespondence } from "../data/provider.js";
import { getUsers } from "../data/provider.js";
=======

import { getUsers, filteredPosts } from "../data/provider.js";
>>>>>>> main

export const ProfileForm = () => {
    const users = getUsers()
    const userPosts = filteredPosts()
    let html = `
    <div class=profileForm>
        <h3>*Post Author's* Profile</h3>
            <div class="postNumber"> 
                <div> Total Number of Posts by *Post Author*: ${userPosts.length} </div>
            </div>
            <div class="messageHeader">Messages between *current user* and *post author*</div>
            <div class="messagesBetweenUsers">
                <div class="messages"> ${ProfileMessageList()} </div>
            </div>
    </div>`
    return html
}




export const ProfileMessageList = () => {
    const users = getUsers()
   
    const correspondence = getCorrespondence()
    return `
      ${correspondence.map(message => {
        const foundUser = users.find(user => user.id === message.userId)
            return `<div class="message" id="message--${message.id}">
                        <div class="message__author">${foundUser.name}</div>
                        <div class="message__text">${message.text}</div>
                </div>`
    })}
    
    `
}

