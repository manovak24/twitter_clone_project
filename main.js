const user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

const user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

// declare variables for dom elements
const headerCtr = document.getElementById('header-ctr');
const heroCtr = document.getElementById('hero-ctr');

// create header section
const numOfTweets = user1.tweets.length;
headerCtr.innerHTML = `
    <div class="back-arrow"> ← </div>    
    <div class="header-info">    
        <div class="name-display">
            <h3>${user1.displayName}</h3>
            <img src="./assets/verified-symbol.jpeg">
        </div>
        <p>${numOfTweets} Tweets</p>
    </div>
`;

// create hero container for background image, profile image, and following button
heroCtr.innerHTML = `
    <div class="hero-img">
        <img src=${user1.coverPhotoURL}>
    </div>
    <div class="hero-content">
        <img src=${user1.avatarURL}>
        <a href="#">Following</a>
    </div>
`;
// const heroImg = document.getElementById('hero-img')
// heroImg.style.background = `no-repeat center/100% url(${user1.coverPhotoURL})`
//  id="hero-img" class="hero-img"
