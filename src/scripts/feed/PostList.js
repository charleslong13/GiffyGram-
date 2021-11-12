import { getPosts, getUsers, DeletePost, getCurrentUser } from '../data/provider.js'


export const PostList = () => {
    const posts = getPosts()
    const users = getUsers()

    return `<section class="posts">
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
                    <img id="favoritePost--" class="actionIcon" src="./images/favorite-star-blank.svg"></img>
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
export const PostList2 = () => {
    const posts = getPosts()
    const users = getUsers()

    return `<section class="posts">
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
                    <img id="favoritePost-" class="actionIcon" src="./images/favorite-star-yellow.svg"></img>
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



//this event listener is responsible for changing the empty star to a filled in star when clicked and vice versa 
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "favoritePost--") {
            //created a new div and gave it a class of postFormContainer in our giffygram module, below we are directing where our post form renders 
            const Element = document.getElementById("postFeed")
            //the line below is responsible for rendering the form as html
            Element.innerHTML = PostList2()
        } else if (event.target.id === "favoritePost-") {
            Element = document.getElementById("postFeed")
            Element.innerHTML = PostList()
        }
    }
)

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "favoritePost--") {

            
            //add click event. target is = to  . startswith "blockPost-- .split  pull postObj.id
            document.addEventListener("click",  // click event listener
                click => {
                    if (click.target.id.startsWith("blockPost--")) {  // checking that what was clicked starts with blockPost--
                        const [, postObjId] = click.target.id.split("--") // splitting the Id from the "blockPost--" element
                        DeletePost(parseInt(postObjId)) // invoking the function with an argument of postObjId variable that holds the posts Id value.
                    }
                })

        }
    })




        

