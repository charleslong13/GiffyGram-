import { getChosenUserId, getChosenYear, getDisplayFavorites, getUsers, setChosenUserDropdownOption, setChosenYear, setDisplayFavoritesBoolean } from '../data/provider.js'


// click event for user selection to set chosen user transient state. Create set Function in provider.js. 
// set clickevent.target.value = to variable and call the set function with the (parseInt)variable as an argument.
document.addEventListener( //listen for the selection of "posts by user" dropdown selection
    "change",
    (event) => {
        if (event.target.id === "userSelection") { // check that target click is "userSelction" declared on line 38
            const dropdownUserSelectionId = event.target.value // declare the variable dropdownUserSelectionId an assign to it the valur of userObj.id on line 42
            setChosenUserDropdownOption(parseInt(dropdownUserSelectionId)) // invoking the setChosenDropdownOption() function and passing the dropdownUserSelectionId 
            //parameter as an argument to that function. This function saves the user dropdown choice to transient state.
        } else if (event.target.id === "showOnlyFavorites"){
            setDisplayFavoritesBoolean()
        } else if (event.target.id === "yearSelection"){
            setChosenYear(event.target.value)
        }
    }
)




export const Footer = () => { // function that generates dropdowns for "Posts by user" and for "Posts Since".
    const users = getUsers()
    const chosenUserId = getChosenUserId()
    const favoritesBoolean = getDisplayFavorites()
    const chosenYear = getChosenYear()
    const dates = ["2020", "2019", "2018", "2017"]

    return `
    <footer class="footer">
        <div class="footer__item">
            <label for="yearSelection">Posts since</label>
            <select id="yearSelection">
                <option value="all">All</option>
                ${dates.map(date => {
                    if(chosenYear === date){
                        return`<option value=${date} selected>${date}</option>`
                    } else {
                        return`<option value=${date}>${date}</option>`
                    }
                })}
            </select>
        <span id="postCount">10</span>
        </div>


        <div class="footer__item">
            <label for="userSelection">Posts by user</label>
            <select id="userSelection">

                <option value=0">All</option>
                ${users.map(userObj => {
                    if(chosenUserId === userObj.id){
                        return `<option value="${userObj.id}" selected>${userObj.name}</option>`
                    } else {
                        return `<option value="${userObj.id}">${userObj.name}</option>`
                    }
                })}

            </select>
        </div>

        <div class="footer__item">
            <label for="showOnlyFavorites">Show only favorites</label>
            ${favoritesBoolean === true
                ?`<input id="showOnlyFavorites" type="checkbox" checked></input>`
                :`<input id="showOnlyFavorites" type="checkbox"></input>`
            }
        </div>
    </footer>`
}

