import { MessageForm } from "../message/MessageForm.js"
import { PrivateMessages } from "../message/PrivateMessages.js"
import { GiffyGram } from "../GiffyGram.js"
import { userUnreadMessages } from "../feed/MessageList.js"

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
            <div id="privateMessages" class="notification__count">
                ${/*length of the array of unread messages for current user*/''}
                ${userUnreadMessages().length}
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
            const messageContainer = document.querySelector(".messageFormContainer")
            //return value of our message form is a string - the line below is responsible for rendering the form as html
            messageContainer.innerHTML = MessageForm()
        } else if (event.target.id == "privateMessages") {
            const applicationElement = document.querySelector(".giffygram")
            applicationElement.innerHTML = PrivateMessages()

        } else if (event.target.id == "logo") {
            const applicationElement = document.querySelector(".giffygram")
            applicationElement.innerHTML = GiffyGram()
            
        }
    }
)