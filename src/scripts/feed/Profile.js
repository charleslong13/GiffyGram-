import { getChosenUserProfileId, getCurrentUser, getUsers, filteredPosts, getCorrespondence} from "../data/provider.js";
import { NavBar } from "../nav/NavBar.js";

export const ProfileForm = () => {
    const userProfileId = getChosenUserProfileId()
    const currentUserId = getCurrentUser().currentUserId
    const users = getUsers()
    const foundProfileUser = users.find(user => user.id === userProfileId)
    const currentUser = users.find(user => user.id === currentUserId)
    const userPosts = filteredPosts()

    return `
    <div class=profileForm>
        <h3>${foundProfileUser.name}'s Profile</h3>
            <div class="postNumber"> 
                <div> Total Number of Posts by ${foundProfileUser.name}: ${userPosts.length}</div>
            </div>
            <div class="messageHeader">Messages between ${foundProfileUser.name} and ${currentUser.name}</div>
            <div class="messagesBetweenUsers">
                <div class="messages"> ${ProfileMessageList()} </div>
            </div>
    </div>`

}

export const Profile = () => {
    return`
    ${NavBar()}
    ${ProfileForm()}
    `
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
    }).join("")}
    
    `
}

