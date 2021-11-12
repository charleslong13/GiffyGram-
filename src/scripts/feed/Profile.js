
import { getUsers } from "../data/provider.js";

export const ProfileForm = () => {
    const users = getUsers()
    let html = `
    <div class=profileForm>
        <h3>*Post Author's* Profile</h3>
            <div class="postNumber"> 
                <div> Total Number of Posts by *Post Author*: <br> *# of posts* </div>
            </div>
            <div class="messageHeader">Messages between *current user* and *post author*</div>
            <div class="messagesBetweenUsers">
                <div> *messages* </div>
            </div>
    </div>`
    return html
}




//Then the person should see the author's first name, last name, 
//total number of posts, and any messages between the logged in user and the post author displayed in descending chronological order

