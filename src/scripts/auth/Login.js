import { getUsers, setCurrentUser } from "../data/provider.js"

//click event listener to listen for a click on the loginButton
document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "loginButton") {
        let foundUser = null
        const userState = getUsers()
//get the user input and store its value in a variable 
        const email = document.querySelector("input[name='email']").value
        const password = document.querySelector("input[name='password']").value
//iterate through users array and if the user inputted email and password are true then reassign foundUser to its value 
        for (const user of userState) {
            if (user.email === email && user.password === password) {
                foundUser = user
            }
        }
//if found user is not null (i.e. if it exists) set the found user's id in local storage 
        if (foundUser !== null) {
            setCurrentUser(foundUser.id) // invoke the function that sets the UserId in transient state.
            localStorage.setItem("gg_user", foundUser.id)
            document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
    
})

export const LoginForm = () => {
    return `
        <div class="loginForm">
            <form>
                <fieldset>
                    <label for="email">Email:</label>
                    <input type="text" name="email" autofocus placeholder="Email address" />
                </fieldset>
                <fieldset>
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Password" />
                </fieldset>
            </form>
            <button id="loginButton" name="loginButton">Login</button>
        </div>
    `
}
