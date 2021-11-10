import { MessageForm } from "../message/MessageForm.js"

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
                0
            </div>
        </div>
        <div class="navigation__item navigation__logout">
            <button id="logout" class="fakeLink">Logout</button>
        </div>
    </nav>`
}


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "directMessageIcon") {
            const applicationElement = document.querySelector(".messageFormContainer")
         applicationElement.innerHTML = MessageForm()
        }
    }
)