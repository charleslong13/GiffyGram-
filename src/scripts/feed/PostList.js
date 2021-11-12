import { getPosts, getUsers, DeletePost, getCurrentUser } from '../data/provider.js'


export const PostList = () => {
    const posts = getPosts()
    const users = getUsers()

    return`<section class="posts">
    ${posts.map(postObj => {
        const foundUser = users.find(userObj => {
            return postObj.userId === userObj.id
        })
        
        return `
        <div class="post">
            <header>
                <h2 class="post__title">${postObj.title}</h2>
            </header>
            <img class="post__image" src="${postObj.imageURL}">
            <div class="post__description">
                ${postObj.description}
            </div>
            <div class="post__tagline">
                <a href="#" class="profileLink" id="profile--${foundUser.id}">
                    Posted by: ${foundUser.name}
                </a>
                on ${postObj.datePosted}
            </div>
            <div class="post__actions">
                <div>
                    ${/*These are both of the star options. Logic will need to be added to determine
                    which one should be shown */''}
                    <img id="favoritePost--" class="actionIcon" src="./images/favorite-star-blank.svg">
                    <img id="favoritePost--" class="actionIcon" src="./images/favorite-star-yellow.svg">
                </div>
                
                
                ${postObj.userId === getCurrentUser().currentUserId // if statement that checks if the userId on a post is the same as the  logged in user. If true the then generate the html which generates the trashcan Icon
                ? ` <div> 
                        <img id="blockPost--${postObj.id}" class="actionIcon" src="./images/block.svg">
                    </div>`
                    : ""
                }
                
                
                
            </div>
        </div>`
    }).join("")}
    </section>`
    
}

//add click event. target is = to  . startswith "blockPost-- .split  pull postObj.id
document.addEventListener("click",  // click event listener
click => {
    if (click.target.id.startsWith("blockPost--")) {  // checking that what was clicked starts with blockPost--
        const [,postObjId] = click.target.id.split("--") // splitting the Id from the "blockPost--" element
        DeletePost(parseInt(postObjId)) // invoking the function with an argument of postObjId variable that holds the posts Id value.
    }
})

