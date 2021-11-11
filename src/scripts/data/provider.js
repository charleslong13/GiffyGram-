const API = "http://localhost:8088"
const mainContainer = document.querySelector(".giffygram")


const applicationState = {
    currentUser: {},
    feed: {
        chosenUserId: null,
        displayFavorites: false,
        displayMessages: false
    },
    users: [],
    messages: [],
    posts: [],
    favorites: [],
    follows: []
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
export const getPosts = () => { // declaring a function getPosts
    if (applicationState.feed.chosenUserId === null) { 
        // checking if chosenUserId is strictly equal to null
        return applicationState.posts.map(post => ({ ...post })) 
        // if true then return all posts
    } else { // if not null (false)
        const filteredPosts = applicationState.posts.filter(post => {  
            // Creating a new array of filtered objects by using the conditional statement below.                                                    
        return  applicationState.feed.chosenUserId === post.userId   
        }) // conditional check if chosenUerId is strictly equal to post.userId. (this is what make up the new array)
        return filteredPosts // returning the filteredPosts variable
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

