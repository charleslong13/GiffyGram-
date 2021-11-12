
import { getChosenUserProfileId, getCurrentUser, getUsers } from "../data/provider.js";
import { NavBar } from "../nav/NavBar.js";

export const ProfileForm = () => {
    const userProfileId = getChosenUserProfileId()
    const currentUserId = getCurrentUser().currentUserId
    const users = getUsers()
    const foundProfileUser = users.find(user => user.id === userProfileId)
    const currentUser = users.find(user => user.id === currentUserId)

    return `
    <div class=profileForm>
        <h3>${foundProfileUser.name}'s Profile</h3>
            <div class="postNumber"> 
                <div> Total Number of Posts by ${foundProfileUser.name}: *# of posts* </div>
            </div>
            <div class="messageHeader">Messages between ${foundProfileUser.name} and ${currentUser.name}</div>
            <div class="messagesBetweenUsers">
                <div> *messages* </div>
            </div>
    </div>`

}

export const Profile = () => {
    return`
    ${NavBar()}
    ${ProfileForm()}
    `
}

//Then the person should see the author's first name, last name, 
//total number of posts, and any messages between the logged in user and the post author displayed in descending chronological order

