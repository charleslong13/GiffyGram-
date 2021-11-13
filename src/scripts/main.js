import { LoginForm } from "./auth/Login.js"
import { fetchFavorites, fetchMessages, fetchPosts, fetchUsers, getChosenUserProfileId, getDisplayMessages, setCurrentUser } from "./data/provider.js"
import { Profile} from "./feed/Profile.js"
import { GiffyGram } from "./GiffyGram.js"
import { PrivateMessages } from "./message/PrivateMessages.js"

const applicationElement = document.querySelector(".giffygram")

export const renderApp = () => {
    //get user out of local storage 
    const user = parseInt(localStorage.getItem("gg_user"))
    const displayMessages = getDisplayMessages()
    const userProfileId = getChosenUserProfileId()

    //fetch our data from the api
    fetchUsers()
    .then(() => fetchMessages())
    .then(() => fetchPosts())
    .then(() => fetchFavorites())
    .then(() => 
    //check if the user exists and then if it does, load the giffygram homepage, if no data has been input load the login page 
        {if (user && displayMessages === false && userProfileId === 0) {
            applicationElement.innerHTML = GiffyGram()
        } else if (user && displayMessages === true && userProfileId === 0){
            applicationElement.innerHTML = PrivateMessages()
        } else if (user && displayMessages === false && userProfileId !== 0){
            applicationElement.innerHTML = Profile()
        } else {
            applicationElement.innerHTML = LoginForm()
        }
    })
    //set the current user with localStorage every time the app is re-rendered
    setCurrentUser(user)
}

renderApp()


//when the state changes, trigger a custom event that console logs our state changed message and runs our renderApp to render either the login or homepage 
applicationElement.addEventListener("stateChanged",
    customEvent => {
        renderApp()
    }
)