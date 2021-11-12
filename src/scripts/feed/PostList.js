import { getPosts, getUsers } from '../data/provider.js'


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
            <div id="post__action" class="post__actions">
                <div>
                    ${/*These are both of the star options. Logic will need to be added to determine
                    which one should be shown */''}
                    ${renderFavoriteButton()}
                </div>
                <div>
                    <img id="blockPost--" class="actionIcon" src="./images/block.svg">
                </div>
            </div>
        </div>`
    }).join("")}
    </section>`
    
}


const renderFavoriteButton = () => {
    return `<img id="favoritePost--" class="actionIcon" src="./images/favorite-star-blank.svg"></img>`
}

const renderSelectedFavoriteButton = () => {
    return `<img id="favoritePost-" class="actionIcon" src="./images/favorite-star-yellow.svg"></img>`
}

//this event listener is responsible for changing the empty star to a filled in star when clicked and vice versa 
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "favoritePost--") {
            //created a new div and gave it a class of postFormContainer in our giffygram module, below we are directing where our post form renders 
            const Element = document.getElementById("post__action")
            //the line below is responsible for rendering the form as html
            Element.innerHTML = renderSelectedFavoriteButton()
        } else if (event.target.id === "favoritePost-") {
            Element = document.getElementById("post__action")
            Element.innerHTML = renderFavoriteButton()
        }
    }
)

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "favoritePost--") {

{/* <img id="favoritePost--" class="actionIcon" src="./images/favorite-star-blank.svg">
                    <img id="favoritePost--" class="actionIcon" src="./images/favorite-star-yellow.svg"></img> */}