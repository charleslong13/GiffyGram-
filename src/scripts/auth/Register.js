import { saveNewUser } from "../data/provider.js"

export const Register = () => {
    return `
    <div class="registerForm">
    <form>
        <h2>Register a New User</h2>
        <fieldset>
            <label for="name">Name:</label>
            <input type="text" name="name" autofocus placeholder="First and Last Name" />
        </fieldset>
        <fieldset>
            <label for="emailReg">Email:</label>
            <input type="text" name="emailReg" autofocus placeholder="Email address" />
        </fieldset>
        <fieldset>
            <label for="passwordReg">Password:</label>
            <input type="password" name="passwordReg" placeholder="Password" />
        </fieldset>
    </form>
    <button id="registerButton" name="registerButton">Register</button>
</div>`
}

document.addEventListener("click", event => {
    if(event.target.id === "registerButton"){
        const email = document.querySelector("input[name='emailReg']").value
        const password = document.querySelector("input[name='passwordReg']").value
        const name = document.querySelector("input[name='name']").value

        const newUserObj = {
            email: email,
            password: password,
            name: name
        }

        saveNewUser(newUserObj)
    }
}
)