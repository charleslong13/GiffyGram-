import { PostEntry } from "./feed/PostEntry.js"
import { PostList } from "./feed/PostList.js"
import { Footer } from "./nav/Footer.js"
import { NavBar } from "./nav/NavBar.js"
import {MessageForm} from './message/MessageForm.js';

export const GiffyGram = () => {

    // return main UI for the main page
    return`
    ${NavBar()}
    ${MessageForm()}
    <div class="giffygram__feed">
        ${PostEntry()}
        ${PostList()}
    </div>
    ${Footer()}
    `

}
