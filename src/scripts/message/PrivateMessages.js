import {NavBar} from '../nav/NavBar.js';
import {Footer} from '../nav/Footer.js';
import {MessageList} from '../feed/MessageList.js';


export const PrivateMessages = () => {
    return`
        ${NavBar()}
        ${MessageList()}
        ${Footer()}
    `
}