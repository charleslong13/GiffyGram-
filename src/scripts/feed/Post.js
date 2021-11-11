// import {saveNewPost, getCurrentUser} from "../data/provider.js"



//will need a click event listener on the save post button 

// document.addEventListener(
//     "click",
//     (event) => {
//         if (event.target.id === "newPost__submit") {
//             alert("Your post has been saved!")
//             const userId = getCurrentUser().currentUserId
//             const title = document.querySelector('input[name="postTitle"]').value
//             const imageURL = document.querySelector('input[name="postURL"]').value
//             const description = document.querySelector('textarea[name="postDescription"]').value
            
//             const postObj = {
//                 userId: userId,
//                 title: title,
//                 imageURL: imageURL,
//                 description: description,
               
//             }
//             saveNewPost(postObj)
//         }})



//when clicked it should send the post data to the api using a fetch/post 