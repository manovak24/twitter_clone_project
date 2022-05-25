const twitterUsers = {
    user1: {
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
                timestamp: '5/6/2022 10:01:20'
            },
            {
                text: 'Starship to the moon',
                timestamp: '12/20/2020 18:37:12'
            },
            {
                text: 'Out on launch pad, engine swap underway',
                timestamp: '2/09/2021 12:11:51'
            }
        ]
    },
    user2: {
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
                timestamp: '10/25/2021 18:37:12'
            },
            {
                text: 'Should I start tweeting memes? Let me know in a comment.',
                timestamp: '12/12/2020 00:01:20'
            },
            {
                text: 'In 2020, I read a book every hour.',
                timestamp: '5/10/2021 12:11:51'
            }
        ]
    }
}

// declare variables for dom elements
const headerCtr = document.getElementById('header-ctr');
const heroCtr = document.getElementById('hero-ctr');
const userInfoCtr = document.getElementById('user-info-ctr');
const tweetsNav = document.getElementById('tweets-nav');
const tweetsCtr = document.getElementById('tweets-ctr');
const url = window.location.href;

// URL search params and query string
function userQuery() {
    let userToDisplay;
    const params = new URLSearchParams(window.location.search);
    
    for (const param of params) {
        for(let user in twitterUsers) {
            if(param[1] === user) {
                userToDisplay = twitterUsers[user];
            }
        }
        return userToDisplay;
    }
}

// function to format date based on how twitter formats their post dates
const timeAgo = (date) => {
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
    const timeAgoInSeconds = Math.floor((new Date() - new Date(date)) / 1000);
    const {interval, epoch} = getDuration(timeAgoInSeconds);
    // console.log(interval)
    // console.log(epoch)
    // console.log(date)
    // const suffix = interval === 1 ? '' : 's';
    // return `${interval} ${epoch} ${suffix} ago`;

    const postDate = new Date(date);
    const currentYear = new Date().getFullYear();
    const postYear = new Date(date).getFullYear();
    if(epoch === 'h') {
        return `${interval}${epoch}`;
    } else if( currentYear === postYear ) {
        return postDate.toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric"}).slice(4, -6);
    } else {
        return postDate.toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric"}).slice(4);
    }
};

// wrapping all of the display code inside if statement to check if the url contains query parameters. If no query paramenters it will display the combined timeline. If url contains query parameters it will go to else block to execute code for individual user timeline
if(!url.includes('?') && url.indexOf('timeline') > -1) {
    for(let user in twitterUsers) {
        for (let tweet of twitterUsers[user].tweets) {
            const tweetArr = []       
            tweetArr.userDisplayName = twitterUsers[user].displayName;
            tweetArr.userName = twitterUsers[user].userName;
            tweetArr.avatar = twitterUsers[user].avatarURL;
            tweetArr.tweet = tweet.text;
            tweetArr.time = tweet.timestamp;

            const tweetDiv = document.createElement('div');
            tweetDiv.classList.add('tweet-content');
            tweetDiv.id = tweet.timestamp;
            tweetDiv.innerHTML = `
                <img src=${tweetArr.avatar}>
                <div>
                    <div class="tweet-name-display">
                        <h4>${tweetArr.userDisplayName}</h4>
                        <img src="./assets/verified-symbol.jpeg">
                        <p class="grey-p">${tweetArr.userName} • </p>
                        <p class="grey-p">${timeAgo(tweet.timestamp)}</p>
                    </div>
                    <div class="tweet">
                        <p>${tweetArr.tweet}</p>
                    </div>
                </div>
            `;
            
            tweetsCtr.appendChild(tweetDiv);
        } 
    }
} else {
    // create header section
    headerCtr.innerHTML = `
        <div class="back-arrow"> ← </div>    
        <div class="header-info">    
            <div class="name-display">
                <h4>${userQuery().displayName}</h4>
                <img src="./assets/verified-symbol.jpeg">
            </div>
            <p class="grey-p">${userQuery().tweets.length} Tweets</p>
        </div>
    `;

    // create hero container for background image, profile image, and following button
    heroCtr.innerHTML = `
        <div class="hero-img">
            <img src=${userQuery().coverPhotoURL}>
        </div>
        <div class="hero-content">
            <img src=${userQuery().avatarURL}>
            <button>Following</button>
        </div>
    `;

    // create conetent for user info section
    userInfoCtr.innerHTML = `
        <div class="name-display">
            <h4>${userQuery().displayName}</h4>
            <img src="./assets/verified-symbol.jpeg">
        </div>
        <p class="grey-p">${userQuery().userName}</p>
        <p class="grey-p">🗓 Joined ${userQuery().joinedDate}</p>
        <div class="follow-ctr">
            <p class="grey-p"><span class="bold-text">${userQuery().followingCount}</span> Following</p>
            <p class="grey-p"><span class="bold-text">${userQuery().followerCount}</span> Following</p>
        </div>
    `;

    // create content for tweet nav section
    tweetsNav.innerHTML = `
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
    `;

    // for of loop to set the innerHTML for each tweet with text and time stamp
    for (let tweet of userQuery().tweets) {
        // create tweet content for each inidividual tweet
        const tweetDiv = document.createElement('div');
        tweetDiv.classList.add('tweet-content');
        tweetDiv.id = tweet.timestamp
        tweetDiv.innerHTML = `
            <img src=${userQuery().avatarURL}>
            <div>
                <div class="tweet-name-display">
                    <h4>${userQuery().displayName}</h4>
                    <img src="./assets/verified-symbol.jpeg">
                    <p class="grey-p">${userQuery().userName} • </p>
                    <p class="grey-p" id="time-passed">${timeAgo(tweet.timestamp)}</p>
                </div>
                <div class="tweet">
                    <p>${tweet.text}</p>
                </div>
            </div>
        `;
        tweetsCtr.appendChild(tweetDiv);
    }
}

// the below sorts the tweets based on their dates
const tweetContent = document.querySelectorAll('.tweet-content');

tweetContent.forEach(tweet => {
    tweet.id = new Date(tweet.id).getTime()
})

const tweetDivs = [...tweetsCtr.children]
tweetDivs.sort((a, b) => b.id - a.id);
tweetDivs.forEach(tweetDiv => tweetsCtr.appendChild(tweetDiv))
