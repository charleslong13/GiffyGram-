export const PostList = () => {
    return`
    <section class="posts">

        <div class="post">
            <header>
                <h2 class="post__title"></h2>
            </header>
            <img class="post__image" src="https://media.giphy.com/media/jJxaUysjzO9ri/giphy.gif">
            <div class="post__description">
                This is a post description hard coded into the HTML. Blah blah blah.
            </div>
            <div class="post__tagline">
                Posted by
                <a href="#" class="profileLink" id="profile--">
                    Mark Ellis
                </a>
                on 11/9/2021
            </div>
            <div class="post__actions">
                <div>
                    ${/*These are both of the star options. Logic will need to be added to determine
                    which one should be shown */''}
                    <img id="favoritePost--" class="actionIcon" src="./images/favorite-star-blank.svg">
                    <img id="favoritePost--" class="actionIcon" src="./images/favorite-star-yellow.svg">
                </div>
                <div>
                    <img id="blockPost--" class="actionIcon" src="./images/block.svg">
                </div>
            </div>
        </div>

    </section>`
}

