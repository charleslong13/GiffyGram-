const API = "http://localhost:8088"
const mainContainer = document.querySelector(".giffygram")


const applicationState = {
    currentUser: {},
    feed: {
        chosenUserId: 0,
        displayFavorites: false,
        displayMessages: false,
        chosenUserProfileId: 0
    },
    users: [],
    messages: [],
    posts: [],
    favorites: [],
    follows: []
}

export const filteredPosts = () => {
    const filteredPostsArray = applicationState.posts.filter(post => post.userId === applicationState.feed.chosenUserProfileId)
    
    return filteredPostsArray
    
    // const filteredPosts = filteredPostsArray.filter(filteredPost => filteredPost.recipientId === applicationState.post.userId)
}




//Return a copy of the applicationState
export const getUsers = () => {
    return applicationState.users.map(user => ({ ...user }))
}
export const getMessages = () => {
    return applicationState.messages.map(message => ({ ...message }))
}
export const getUserUnreadMessages = () => {
    //create an array of message objects that do not have the "read" key, and thus are unread.
    const unreadArray = applicationState.messages.filter(message => !message.read)
    //check through unread messages and filter out those that were sent to the current user, store in an array
    const userUnreadMessages = unreadArray.filter(unreadMessage => unreadMessage.recipientId === applicationState.currentUser.currentUserId)

    return userUnreadMessages
}
export const getUserReadMessages = () => {
    //create an array of message objects that do not have the "read" key, and thus are unread.
    const unreadArray = applicationState.messages.filter(message => message.read)
    //check through unread messages and filter out those that were sent to the current user, store in an array
    const userUnreadMessages = unreadArray.filter(unreadMessage => unreadMessage.recipientId === applicationState.currentUser.currentUserId)

    return userUnreadMessages
}
export const getUserFavoritePosts = () => {
    //filter favorites based on the current logged in user
    const currentUserFavorites = applicationState.favorites.filter(favorite => favorite.userId === applicationState.currentUser.currentUserId)
    let filteredPostsByFavoritesOnly = []
        for(const post of applicationState.posts){
            const foundFavorite = currentUserFavorites.find(favorite => favorite.postId === post.id)
            //if the post is in a favorite object, push it to the empty array
            if(foundFavorite){
                filteredPostsByFavoritesOnly.push(post)
            }
        }
    return filteredPostsByFavoritesOnly
}
export const getPosts = () => {
    const feed = applicationState.feed //setting feed to a variable to cut down on wordiness
    // Create a new array of filtered objects by checking if chosenUserId is strictly equal to post.userId and adding the objects where that is true to the array.
    const filteredPostsByUserOnly = applicationState.posts.filter(post => feed.chosenUserId === post.userId)
    // Array of posts filtered by favorites from the above function
    const filteredPostsByFavoritesOnly = getUserFavoritePosts()
    //Array that checks both of the above filtered arrays and returns the objects that are in both.
    const filteredPostsByUserAndFavorite = filteredPostsByUserOnly.filter(userPost => filteredPostsByFavoritesOnly.includes(userPost));

    // if user filter is on "all" and checkbox is unclicked/empty.
    if (feed.chosenUserId === 0 && feed.displayFavorites === false) {
        // if true then return all posts
        return applicationState.posts.map(post => ({ ...post })) 
    // if a user has been chosen but the favorites box hasn't been checked
    } else if (feed.chosenUserId !== 0 && feed.displayFavorites === false){ 
        return filteredPostsByUserOnly 
    //if a user has not been chosen and the favorites box is checked
    } else if (feed.chosenUserId === 0 && feed.displayFavorites === true){
        return filteredPostsByFavoritesOnly
    //if a user has been chosen AND the favorites box is checked.
    } else if (feed.chosenUserId !== 0 && feed.displayFavorites === true){
        return filteredPostsByUserAndFavorite
    }
}
export const getFavorites = () => {
    return applicationState.favorites.map(favorite => ({ ...favorite }))
}
export const getFollows = () => {
    return applicationState.follows.map(follow => ({ ...follow }))
}
export const getCurrentUser = () => {
    return { ...applicationState.currentUser }
}
export const getChosenUserId = () => {
    return applicationState.feed.chosenUserId
}
export const getDisplayFavorites = () => {
    return applicationState.feed.displayFavorites
}
export const getDisplayMessages = () => {
    return applicationState.feed.displayMessages
}
export const getChosenUserProfileId = () => {
    //get the chosen user profile id from transient state
    return applicationState.feed.chosenUserProfileId
    //returning the chosen user profile from the feed object in application state.
}



//Set transient state
export const setCurrentUser = (id) => { 
    // function that sets the current "Post by user" option in transient state.
    applicationState.currentUser.currentUserId = id 
    // creating the key value pair of currentUserId and assing to it the value of id which is
    // a parameter thats passed in to the function as an argument.
}
export const setChosenUserDropdownOption = (id) => { 
    // function that sets transient state for the user that was chosen from the dropdown menu "Post by user" .
    applicationState.feed.chosenUserId = id 
    // getting the chosenUserId from the applicationState Object on line 8.
    mainContainer.dispatchEvent(new CustomEvent("stateChanged")) 
    // dispatched a custom event that will fetch API and re-render HTML from the Main.
}
export const setDisplayFavoritesBoolean = () => { 
    // function that sets displayFavorites transient boolean based on what it currently is.
    if(applicationState.feed.displayFavorites === false){
        applicationState.feed.displayFavorites = true
    } else {
        applicationState.feed.displayFavorites = false
    }
    // Fetch API and re-render HTML from the Main.
    mainContainer.dispatchEvent(new CustomEvent("stateChanged")) 
}
export const setDisplayMessagesBoolean = () => { 
    applicationState.feed.displayMessages = true
    // // Fetch API and re-render HTML from the Main.
    // mainContainer.dispatchEvent(new CustomEvent("stateChanged")) 
}
export const resetTransient = () => {
    applicationState.feed = {
        chosenUserId: 0,
        displayFavorites: false,
        displayMessages: false
    }
}

export const setChosenUserProfileId = (id) => { 
    //setting the Chosen user profile id in stransient state
    applicationState.feed.chosenUserProfileId = id 
    // broadcasting state changed to the DOM 
    mainContainer.dispatchEvent(new CustomEvent("stateChanged")) 
}




//Fetch the API (GET)
export const fetchUsers = () => {
    return fetch(`${API}/users`)
        .then(response => response.json())
        .then(
            (usersAPI) => {
                // Store the external state in application state
                applicationState.users = usersAPI
            }
        )
}
export const fetchMessages = () => {
    return fetch(`${API}/messages`)
        .then(response => response.json())
        .then(
            (messagesAPI) => {
                // Store the external state in application state
                applicationState.messages = messagesAPI
            }
        )
}
export const fetchPosts = () => {
    return fetch(`${API}/posts`)
        .then(response => response.json())
        .then(
            (postsAPI) => {
                // Store the external state in application state
                applicationState.posts = postsAPI
            }
        )
}
export const fetchFavorites = () => {
    return fetch(`${API}/favorites`)
        .then(response => response.json())
        .then(
            (favoritesAPI) => {
                // Store the external state in application state
                applicationState.favorites = favoritesAPI
            }
        )
}
export const fetchFollows = () => {
    return fetch(`${API}/follows`)
        .then(response => response.json())
        .then(
            (followsAPI) => {
                // Store the external state in application state
                applicationState.follows = followsAPI
            }
        )
}


//POST to API
export const saveDirectMessage = (directMessageObj) => { 
    // export function that saves the state of Direct Messages created on the MessageForm module
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(directMessageObj)
    }

    return fetch(`${API}/messages`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
export const saveNewPost = (postObj) => { // export function that saves the state of the new post created and posts it to the API
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
    }


    return fetch(`${API}/posts`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
export const saveNewFavorite = (favoriteObj) => { // export function that saves the state of the new post created and posts it to the API
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(favoriteObj)
    }


    return fetch(`${API}/favorites`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


/* PATCH the "read" boolean on the message objects in the API 
(change it to true for all userUnreadMessages) */
export const patchMessageBoolean = () => {
    //create an empty array for the promises
    const promiseArray = []
    const userUnreadMessages = getUserUnreadMessages()
    /*for each message that is unread and applies to the current user, push a PATCH promise
    to the promise array. Each promise will change the read boolean to true in the API*/
    for (const message of userUnreadMessages) {
        promiseArray.push(fetch(`${API}/messages/${message.id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    read: true
                })
            })
            .then(response => response.json())
        )
    }
    //Execute all of the promises in the promise array, then console log confirmation
    Promise.all(promiseArray)
        .then(() => {
            console.log("All messages changed to read")
        })
}

//DELETE from API
export const DeletePost = (id) => { // function that takes a parameter of id and will delete that post from the API
    return fetch(`${API}/posts/${id}`, { 
        method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged")) // custom event that broadcasts state changed
            }
        )
}
export const DeleteFavorite = (id) => { // function that takes a parameter of id and will delete that post from the API
    return fetch(`${API}/favorites/${id}`, { 
        method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged")) // custom event that broadcasts state changed
            }
        )
}

