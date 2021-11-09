const API = "http://localhost:8088"
const mainContainer = document.querySelector(".giffygram")


const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
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
    return database.users.map(user => ({...user}))
}
export const getMessages = () => {
    return database.messages.map(message => ({...message}))
}
export const getPosts = () => {
    return database.posts.map(post => ({...post}))
}
export const getFavorites = () => {
    return database.favorites.map(favorite => ({...favorite}))
}
export const getFollows = () => {
    return database.follows.map(follow => ({...follow}))
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

