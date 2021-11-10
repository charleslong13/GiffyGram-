import {getMessages} from "../data/provider.js"

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

const NotificationCount = () => {
    const messages = getMessages()

    //create an array of message objects that do not have the "read" key, and thus are unread.
    const unreadArray = messages.filter(message => !message.read)

    //return a string of the length of the array (the number of unread objects)
    return `${unreadArray.length}`

}