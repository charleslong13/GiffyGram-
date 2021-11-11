import { getUsers, saveDirectMessage, getCurrentUser } from "../data/provider.js"




document.addEventListener(  // event listener that will listen for the click on save button and save user input to state. Event also generates an alert "message has been sent"
    "click",
    (changeEvent) => {
        if (changeEvent.target.id === "directMessage__submit") {
            alert("Your message has been sent")
            const recipientId = document.querySelector('select[name="directMessage__userSelect"]').value // get the values of the user choice from the Recipient dropdown.
            const text = document.querySelector("textarea[name='message']").value // get value of the message written in the text field.
            const userId = getCurrentUser().currentUserId // assigning the value of the getCurrentUser() function to userId which is an Object 
            const directMessageObj = { // declare a variable to hold the values of the user choice and text which will be sent to the API
                
                userId: userId,
                recipientId: parseInt(recipientId),
                text: text
            }

            saveDirectMessage(directMessageObj)
        }
    }
)








// export function which will generate  the Direct Message form
// It has title of Direct Message, a recipient title and dropdown,  a Message title and text box and Save and Cansel button.
export const MessageForm = () => {
    const users = getUsers() // declare the users variable and assign to it the value of the getUsers() function
    // created a variable html and assigned to it the value of the Direct Message form. On line 18 the users array is being itterated through to
    //get the userObjects and then on line 21 the userObj.name is being interpolated to render the Users name property for the message dropdown.
    let html = ` 
    <div id="myDiv" class="directMessage">
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
<<<<<<< HEAD
            <button id="directMessage__submit">Send</button>
            <button id="directMessage__cancel">Cancel</button>
            <button id="directMessage__close">x</button>
        </div>
=======
            <button id="directMessage__submit">Sent</button>
            ${/*Added a onclick handler to take away the messageform display when the cancel or X buttons are clicked*/''}
            <button id="directMessage__cancel" onclick="document.getElementById('myDiv').style.display='none'">Cancel</button>
            <button class="close" id="directMessage__close" onclick="document.getElementById('myDiv').style.display='none'">x</button>
            </div>
>>>>>>> main
            
            `
            
            return html
        }
        
        









