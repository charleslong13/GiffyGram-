import { getPosts, getUsers } from '../data/provider.js'


export const PostList = () => {
    const posts = getPosts()
    const users = getUsers()

    return`<section class="posts">
    ${posts.map(postObj => {
        const foundUser = users.find(userObj => {
            return postObj.userId === userObj.id
        }
        )
        
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
                <a href="#" class="profileLink" id="profile--">
                    Posted by: ${foundUser.name}
                </a>
                on 11/9/2021
            </div>
            <div class="post__actions">
                <div>
                    ${/*These are both of the star options. Logic will need to be added to determine
                    which one should be shown */''}
                    <img id="favoritePost--" class="actionIcon" src="./images/favorite-star-blank.svg">
                    <img id="favoritePost--" class="actionIcon" src="./images/favorite-star-yellow.svg">
                </div>
                <div>
                    <img id="blockPost--" class="actionIcon" src="./images/block.svg">
                </div>
            </div>
        </div>`
    }).join("")}
    </section>`
    
}