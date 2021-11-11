
//created a new function to only render the postform button 
export const PostEntryButton = () => {
    return`
    <div id="postFormButton">Have a gif to post?</div>`
}

//this function generates the actual post form 
export const PostEntry = () => {
    return`
   <br><br><br>
    <div id="postFormDiv" class="newPost">
        <div>
            <input value="" name="postTitle" class="newPost__input" type="text" placeholder="Title">
        </div>
        <div>
            <input value="" name="postURL" class="newPost__input" type="text" placeholder="URL of gif">
        </div>

        <textarea name="postDescription" class="newPost__input newPost__description" placeholder="Story behind your gif..."></textarea>

        <button id="newPost__cancel">Save</button>
        <button id="newPost__submit" onclick="document.getElementById('postFormDiv').style.display='none'">Cancel</button>
    </div>`
}
//above I also added in an onclick handler to be able to close the form 
//created an event listener so that when the post entry form button is clicked it will display the actual form 
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "postFormButton") {
            //created a new div and gave it a class of postFormContainer in our giffygram module, below we are directing where our post form renders 
            const applicationElement = document.querySelector(".postFormContainer")
            //the line below is responsible for rendering the form as html
            applicationElement.innerHTML = PostEntry()
        }
    }
)