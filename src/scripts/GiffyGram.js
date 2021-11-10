export const GiffyGram = () => {

    // return main UI
    return `        <nav class="navigation">
    <div class="navigation__left">
        <div class="navigation__homeIcon">
            <img src="/images/pb.png" alt="Giffygram icon" id="logo">
        </div>
        <h1 class="navigation__title">Giffygram</h1>
    </div>
    <div class="navigation__right">
        <img id="navigation__messageFormIcon" src="/images/fountain-pen.svg" alt="Direct message">
        <div class="navigation__messageNotifications"> 0 </div>
        <button id="navigation__logout" class="fakeLink">Logout</button>
    </div>
</nav>

<div class="messageForm">

</div>

<div class="giffygram__feed">
    <button id="postFormButton">Have a gif to post?</button>

    <section class="posts">
        <div class="post">
            <header>
                <h2 class="post__title">all done</h2>
            </header>
            <img class="post__image" src="https://media.giphy.com/media/jJxaUysjzO9ri/giphy.gif">
            <div class="post__description">
                ahhh
            </div>
            <div class="post__tagline">
                Posted by
                <a href="#" class="profileLink" id="profile--3">
                    Mark Ellis
                </a>
                on 11/9/2021
            </div>
            <div class="post__actions">
                <div>
                    <img id="favoritePost--" class="actionIcon" src="/images/favorite-star-blank.svg">
                </div>
                <div>
                    <img id="blockPost--" class="actionIcon" src="/images/block.svg">
                </div>
            </div>
        </div>
    </section>
</div>

    <footer class="footer">
        <div class="footer__item">
            Posts since <select id="yearSelection">
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
            </select>
            <span id="postCount">10</span>
        </div>
        <div class="footer__item">
            <label for="userSelection">Posts by user</label>
            <select id="userSelection">

                <option value="user--">Ray Medrano</option>
                <option value="user--">Meg Ducharme</option>
                <option value="user--">Mark Ellis</option>
                <option value="user--">Daniella Agnoletti</option>
                <option value="user--">Kimmy Bird</option>
                <option value="user--">Emily Lemmon</option>

            </select>
        </div>
        <div class="footer__item">
            <label for="showOnlyFavorites">Show only favorites</label>
            <input id="showOnlyFavorites" type="checkbox">
        </div>
    </footer>`
}
