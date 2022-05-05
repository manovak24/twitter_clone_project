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
            timestamp: '1/1/2022 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '12/09/2021 18:37:12'
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

// function to figoure out how much time has passed since tweet was posted
const epochs = [
    ['year', 31536000],
    ['month', 2592000],
    ['day', 86400],
    ['h', 3600],
    ['minute', 60],
    ['second', 1]
];

const getDuration = (timeAgoInSeconds) => {
    for (let [name, seconds] of epochs) {
        const interval = Math.floor(timeAgoInSeconds / seconds);
        if (interval >= 1) {
            return {
                interval: interval,
                epoch: name
            };
        }
    }
};


const timeAgo = (date) => {
    const timeAgoInSeconds = Math.floor((new Date() - new Date(date)) / 1000);
    const {interval, epoch} = getDuration(timeAgoInSeconds);
    console.log(interval)
    console.log(epoch)
    console.log(date)
    // const suffix = interval === 1 ? '' : 's';
    // return `${interval} ${epoch} ${suffix} ago`;

    const postDate = new Date(date);
    const currentYear = new Date().getFullYear();
    const postYear = new Date(user1.tweets[0].timestamp).getFullYear();
    if(epoch === 'h') {
        return `${interval}${epoch}`;
    } else if( currentYear === postYear ) {
        return postDate.toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric"}).slice(4, -6);
    } else {
        return postDate.toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric"}).slice(4);
    }
    
};

// console.log(new Date(user1.tweets[1].timestamp).getFullYear(), new Date().getFullYear())

// declare variables for dom elements
const headerCtr = document.getElementById('header-ctr');
const heroCtr = document.getElementById('hero-ctr');
const userInfoCtr = document.getElementById('user-info-ctr');
const tweetsCtr = document.getElementById('tweets-ctr')

// create header section
headerCtr.innerHTML = `
    <div class="back-arrow"> ← </div>    
    <div class="header-info">    
        <div class="name-display">
            <h4>${user1.displayName}</h4>
            <img src="./assets/verified-symbol.jpeg">
        </div>
        <p class="grey-p">${user1.tweets.length} Tweets</p>
    </div>
`;

// create hero container for background image, profile image, and following button
heroCtr.innerHTML = `
    <div class="hero-img">
        <img src=${user1.coverPhotoURL}>
    </div>
    <div class="hero-content">
        <img src=${user1.avatarURL}>
        <button>Following</button>
    </div>
`;

// create conetent for user info section
userInfoCtr.innerHTML = `
    <div class="name-display">
        <h4>${user1.displayName}</h4>
        <img src="./assets/verified-symbol.jpeg">
    </div>
    <p class="grey-p">${user1.userName}</p>
    <p class="grey-p">🗓 Joined ${user1.joinedDate}</p>
    <div class="follow-ctr">
        <p class="grey-p"><span class="bold-text">${user1.followingCount}</span> Following</p>
        <p class="grey-p"><span class="bold-text">${user1.followerCount}</span> Following</p>
    </div>
`;

// create content for tweet container section
const timePassed = timeAgo(user1.tweets[0].timestamp)
tweetsCtr.innerHTML = `
    <div class="tweet-nav">
        <div class="tab tab-active">
            <p>Tweets</p>
            <div class="tab-border tab-border-active"></div>
        </div>

        <div class="tab">
            <p>Tweets & Replies</p>
            <div class="tab-border"></div>
        </div>

        <div class="tab">
            <p>Media</p>
            <div class="tab-border"></div>
        </div>

        <div class="tab">
            <p>Likes</p>
            <div class="tab-border"></div>
        </div>
    </div>

    <div class="tweet-content">
        <img src=${user1.avatarURL}>
        <div class="name-display">
            <h4>${user1.displayName}</h4>
            <img src="./assets/verified-symbol.jpeg">
            <p class="grey-p">${user1.userName} • </p>
            <p class="grey-p">${timePassed}</p>
        </div>
    </div>
`;

