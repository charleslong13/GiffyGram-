export const PostEntryButton = () => {
    return`
    <div id="postFormButton">Have a gif to post?</div>`
}


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

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "postFormButton") {
            //created a new div and gave it a class of messageFormContainer in our giffygram module, below we are directing where our message form renders 
            const applicationElement = document.querySelector(".postFormContainer")
            //return value of our message form is a string - the line below is responsible for rendering the form as html
            applicationElement.innerHTML = PostEntry()
        }
    }
)