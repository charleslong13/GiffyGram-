import { getUsers } from "../data/provider.js"


// export function which will generate  the Direct Message form
// It has title of Direct Message, a recipient title and dropdown,  a Message title and text box and Save and Cansel button.
export const MessageForm = () => {
    const users = getUsers() // declare the users variable and assign to it the value of the getUsers() function
    // created a variable html and assigned to it the value of the Direct Message form. On line 18 the users array is being itterated through to
    //get the userObjects and then on line 21 the userObj.name is being interpolated to render the Users name property for the message dropdown.
    let html = ` 
    <div class="directMessage">
            <h3>Direct Message</h3>
            <div>Recipient:
                <select name="directMessage__userSelect" class="message__input">
                    <option value="0">Choose a recipient...</option>
                    ${users.map(userObj => {
                        return `
                        <option value="${userObj.id}">${userObj.name}</option>
    
                    `
                }).join("")}
                </select>
            </div>
            <div>
                <label for="message">Message:</label>
                <textarea name="message" class="message__input" type="text" placeholder="Message to user"> </textarea>
            </div> 
            <button id="directMessage__submit">Save</button>
            <button id="directMessage__cancel">Cancel</button>
            <button id="directMessage__close">x</button>
        </div>
            
        `

    return html
}

























