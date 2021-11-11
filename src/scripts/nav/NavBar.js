import { MessageForm } from "../message/MessageForm.js"
import {getCurrentUser, getMessages} from "../data/provider.js"

export const NavBar = () => {
    return `        
    <nav class="navigation">
        <div class="navigation__item navigation__icon">
            ${/*imgs will still work with a click event */''}
            <img src="./images/pb.png" alt="Giffygram icon" id="logo">
        </div>
        <div class="navigation__item navigation__name">
            Giffygram
        </div>
        <div class="navigation__item navigation__message">
            <img id="directMessageIcon" src="./images/fountain-pen.svg" alt="Direct message">
            <div class="notification__count">
                ${/*replace with function to render dynamic message count*/''}
                ${NotificationCount()}
            </div>
        </div>
        <div class="navigation__item navigation__logout">
            <button id="logout" class="fakeLink">Logout</button>
        </div>
    </nav>`
}

//create a click eventlistener so that when the pen icon is clicked it will render our message form  
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "directMessageIcon") {
            //created a new div and gave it a class of messageFormContainer in our giffygram module, below we are directing where our message form renders 
            const applicationElement = document.querySelector(".messageFormContainer")
            //return value of our message form is a string - the line below is responsible for rendering the form as html
            applicationElement.innerHTML = MessageForm()
        }
    }
)
const NotificationCount = () => {
    const messages = getMessages()
    const currentUser = getCurrentUser()

    //create an array of message objects that do not have the "read" key, and thus are unread.
    const unreadArray = messages.filter(message => !message.read)
    //check through unread messages and filter out those that were sent to the current user, store in an array
    const userUnreadMessages = unreadArray.filter(unreadMessage => unreadMessage.recipientId === currentUser.currentUserId)

    //return a string of the length of the array (the number of unread objects with appropriate recipientId)
    return `${userUnreadMessages.length}`

}
