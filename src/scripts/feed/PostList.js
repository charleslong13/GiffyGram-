import { getPosts, getUsers } from '../nav/getPosts.js'


export const PostList = () => {
    const posts = getPosts()
    const users = getUsers()

    return`
    ${posts.map(postObj => {
        <section class="posts">
        <div class="post">
            <header>
                <h2 class="post__title">HTML Test</h2>
            </header>
            <img class="post__image" src="${postObj.imageUrl}">
            <div class="post__description">
                ${postObj.description}
            </div>
            <div class="post__tagline">
                Posted by
                <a href="#" class="profileLink" id="profile--">
                    ${users.map(userObj => {

                    }).join("")}
                    ${}
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
        </div>
    </section>`
    }).join("")}`
    
}