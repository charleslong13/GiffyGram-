import { LoginForm } from "./auth/Login.js"
import { fetchFavorites, fetchFollows, fetchMessages, fetchPosts, fetchUsers, setCurrentUser } from "./data/provider.js"
import { GiffyGram } from "./GiffyGram.js"

const applicationElement = document.querySelector(".giffygram")

export const renderApp = () => {
    //get user out of local storage 
    const user = parseInt(localStorage.getItem("gg_user"))
    //fetch our data from the api
    fetchUsers()
    .then(() => fetchMessages())
    .then(() => fetchPosts())
    .then(() => fetchFollows())
    .then(() => fetchFavorites())
    .then(() => 
    //check if the user exists and then if it does, load the giffygram homepage, if no data has been input load the login page 
        {if (user) {
            applicationElement.innerHTML = GiffyGram()
        } else {
            applicationElement.innerHTML = LoginForm()
        }
    })
    //set the current user with localStorage every time the app is re-rendered
    setCurrentUser(parseInt(localStorage['getItem']('gg_user')))
}

renderApp()


//when the state changes, trigger a custom event that console logs our state changed message and runs our renderApp to render either the login or homepage 
applicationElement.addEventListener("stateChanged",
    customEvent => {
        console.log("State has changed. Re-rendering HTML...")
        renderApp()
        
    }
)