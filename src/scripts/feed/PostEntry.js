import { saveNewPost, getCurrentUser } from "../data/provider.js"

//created a new function to only render the postform button 
export const PostEntryButton = () => {
    return `
    <div id="postFormButton">Have a gif to post? Click here!</div>`
}

//this function generates the actual post form 
export const PostEntry = () => {
    return `
        <div>
            <input value="" name="postTitle" class="newPost__input" type="text" placeholder="Title">
        </div>
        <div>
            <input value="" name="postURL" class="newPost__input" type="text" placeholder="URL of gif">
        </div>

        <textarea name="postDescription" class="newPost__input newPost__description" placeholder="Story behind your gif..."></textarea>

        <button id="newPost__submit">Save</button>
        <button id="newPost__cancel" >Cancel</button>
    `
}
//above I also added in an onclick handler to be able to close the form 
//created an event listener so that when the post entry form button is clicked it will display the actual form 
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "postFormButton") {
            //created a new div and gave it a class of postFormContainer in our giffygram module, below we are directing where our post form renders 
            const applicationElement = document.getElementById("postFormButton")
            //the line below is responsible for rendering the form as html
            applicationElement.innerHTML = PostEntry()
        }
    }
)

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "newPost__cancel") {
            const applicationElement = document.getElementById("postFormArea")
            applicationElement.innerHTML = PostEntryButton()
            // created an else if so if the save button is clicked then it creates a postObj and then posts it to the api by importing and invoking saveNewPost from our provider.js
        } else if (event.target.id === "newPost__submit") {
            const userId = getCurrentUser().currentUserId
            const title = document.querySelector('input[name="postTitle"]').value
            const imageURL = document.querySelector('input[name="postURL"]').value
            const description = document.querySelector('textarea[name="postDescription"]').value
            const dateInput = new Date()
            const postObj = {
                userId: userId,
                title: title,
                imageURL: imageURL,
                description: description,
                datePosted: dateInput.toLocaleDateString()
            }
            saveNewPost(postObj)
        }
    })
