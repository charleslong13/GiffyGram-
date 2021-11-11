
import { PostList } from "./feed/PostList.js"
import { Footer } from "./nav/Footer.js"
import { NavBar } from "./nav/NavBar.js"
import {PostEntryButton} from "./feed/PostEntry.js"


export const GiffyGram = () => {

    // return main UI for the main page
    //created a new div for where we want our message form to be displayed 
    return`
    ${NavBar()}
    <div class="messageFormContainer"></div>
    <div class="postFormContainer"></div>
    <div class="giffygram__feed">
    ${PostEntryButton()}
    ${PostList()}
    </div>
    ${Footer()}
    `
    
}

// ${MessageForm()}