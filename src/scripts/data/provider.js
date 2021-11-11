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
export const setCurrentUser = (id) => { 
    // function that sets the current "Post by user" option in transient state.
    applicationState.currentUser.currentUserId = id 
    // creating the key value pair of currentUserId and assing to it the value of id which is
}  // a parameter thats passed in to the function as an argument.
export const setChosenUserDropdownOption = (id) => { 
    // function that sets transient state for the user that was chosen from the dropdown menu "Post by user" .
    applicationState.feed.chosenUserId = id 
    // getting the chosenUserId from the applicationState Object on line 8.
    mainContainer.dispatchEvent(new CustomEvent("stateChanged")) 
    // dispatched a custom event that will fetch API and re-render HTML from the Main.
}



//Fetch the API
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

export const saveDirectMessage = (directMessageObj) => { 
    // export fumction that saves the state of Direct Messages created on the MessageForm module
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



