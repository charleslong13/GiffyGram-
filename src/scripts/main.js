import { LoginForm } from "./auth/Login.js"
import { fetchFavorites, fetchFollows, fetchMessages, fetchPosts, fetchUsers } from "./data/provider.js"
import { GiffyGram } from "./GiffyGram.js"

const applicationElement = document.querySelector(".giffygram")

export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))
    
    fetchUsers()
    .then(() => fetchMessages())
    .then(() => fetchPosts())
    .then(() => fetchFollows())
    .then(() => fetchFavorites())
    .then(() => 
        {if (user) {
            applicationElement.innerHTML = GiffyGram()
        } else {
            applicationElement.innerHTML = LoginForm()
        }
    })

}

renderApp()

applicationElement.addEventListener("stateChanged",
    customEvent => {
        console.log("State has changed. Re-rendering HTML...")
        renderApp()
    }
)