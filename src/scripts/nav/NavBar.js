import { MessageForm } from "../message/MessageForm.js"
import { PrivateMessages } from "../message/PrivateMessages.js"
import { getUserUnreadMessages, patchMessageBoolean, resetTransient, setDisplayMessagesBoolean } from "../data/provider.js"

export const NavBar = () => {
    return `        
    <nav class="navigation">
        <div class="navigation__item navigation__icon">
            <img src="./images/pb.png" alt="Giffygram icon" id="logo">
        </div>
        <div class="navigation__item navigation__name">
            Giffygram
        </div>
        <div class="navigation__item navigation__message">
            <img id="directMessageIcon" src="./images/fountain-pen.svg" alt="Direct message">
            <div id="privateMessages" class="notification__count">
                ${NotificationCount()}
            </div>
        </div>
        <div class="navigation__item navigation__logout">
            <button id="logout" class="fakeLink">Logout</button>
        </div>
    </nav>`
}

const NotificationCount = () =>  {
    const userUnreadMessages = getUserUnreadMessages()
    //notifications are the length of the array of messages that are both unread and apply 
    //to the currently logged in user
    return userUnreadMessages.length
}

//create a click eventlistener so that when the pen icon is clicked it will render our message form  
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "directMessageIcon") {
            //created a new div and gave it a class of messageFormContainer in our giffygram module, below we are directing where our message form renders 
            const messageContainer = document.querySelector(".messageFormContainer")
            //return value of our message form is a string - the line below is responsible for rendering the form as html
            messageContainer.innerHTML = MessageForm()
        } else if (event.target.id == "privateMessages") {
            const applicationElement = document.querySelector(".giffygram")
            //when the icon is clicked on to read the messages, render the navbar, messagelist, and footer
            setDisplayMessagesBoolean()
            //and use the PATCH method to change all unread messages for the user to read
            patchMessageBoolean()
            applicationElement.innerHTML = PrivateMessages()
        } else if (event.target.id == "logo") {
            resetTransient()
            const applicationElement = document.querySelector(".giffygram")
            //re-render the page and fetch all data again when home button is clicked
            //so that data is fetched again and container is set back to GiffyGram()
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        } else if (event.target.id == "logout") {
            //checks if logout button was clicked
            localStorage.clear() 
            //runs the .clear() method on localstorage to clear out the currently logged in user
            const applicationElement = document.querySelector(".giffygram")
            //re-render the page and fetch all data again when home button is clicked
            //so that data is fetched again and container is set back to GiffyGram()
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))

        }
    }
)