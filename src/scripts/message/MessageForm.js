export const MessageForm = () => {
    return`  
    <div class="directMessage">
        <h3>Direct Message</h3>
        <div>Recipient:
            <select name="directMessage__userSelect" class="message__input">
                <option value="0">Choose a recipient...</option>
                <option value="messageRecipient--">Leah Daniel</option>
                <option value="messageRecipient--">Sutherland Seals</option>
                <option value="messageRecipient--">Charlie Long</option>
            </select>
        </div>
        <div>
            <label for="message">Message:</label>
            <input name="message" class="message__input" type="text" placeholder="Message to user">
        </div>

        <button id="directMessage__submit">Save</button>
        <button id="directMessage__cancel">Cancel</button>

        <button id="directMessage__close">x</button>

    </div>
`
}