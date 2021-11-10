export const Footer = () => {
    return`
    <footer class="footer">
        <div class="footer__item">
            <label for="yearSelection">Posts since</label>
            <select id="yearSelection">
                <option value="1">2020</option>
                <option value="2">2019</option>
                <option value="3">2018</option>
                <option value="4">2017</option>
            </select>
            <span id="postCount">10</span>
        </div>
        <div class="footer__item">
            <label for="userSelection">Posts by user</label>
            <select id="userSelection">

                <option value=0">All</option>
                <option value="user--">Leah Daniel</option>
                <option value="user--">Sutherland Seals</option>
                <option value="user--">Charlie Long</option>

            </select>
        </div>
        <div class="footer__item">
            <label for="showOnlyFavorites">Show only favorites</label>
            <input id="showOnlyFavorites" type="checkbox">
        </div>
    </footer>`
}