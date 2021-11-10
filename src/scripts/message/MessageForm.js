import { getUsers } from "../data/provider.js"


// export function which will generate  the Direct Message form
// It has title of Direct Message, a recipient title and dropdown,  a Message title and text box and Save and Cansel button.
export const MessageForm = () => {
    const users = getUsers() // declare the users variable and assign to it the value of the getUsers() function
    // created a variable html and assigned to it the value of the Direct Message form. On line 18 the users array is being itterated through to
    //get the userObjects and then on line 21 the userObj.name is being interpolated to render the Users name property for the message dropdown.
    let html = ` 
            <h2>Direct Message</h2>

            <div class="field">
            <label class="label" for="recipient">Recipient:</label>
            <select id="Recipient"</select>
            <option value="0">--Choose a recipient...--</option>
                
            ${users.map(userObj => {
                    return `
                    ${userObj.name}

                `
            })}
            </div>

            <div class="field">
                <label class="label" for="url">Message:</label>
                <textarea name="message" value="Message ro user" class="input">Message to user<textarea/>
            </div>

            <button class="button" id="sendMessage">Send</button>
            <button class="button" id="cancelMessage">Cancel</button>
        `

    return html
}