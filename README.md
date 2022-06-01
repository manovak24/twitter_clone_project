# Project Name
> This is a Freemote project that is a Twitter clone. The concept behind this project was to learn how to build a fully responsive and dynamic javascript app that manipulates the DOM to display user data or an complete tweet timeline.

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Code Examples](#code-examples)
* [Project Status](#project-status)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
- Twitter Clone project from Freemote
- The purpose of this project was to build a dynamic JavaScript web app


## Technologies Used
- HTML, CSS and JavaScript


## Features
List the ready features here:
- Can display user data depending on URL query string
- Sorts tweets based on timestamp
- Formats tweet timestamp to match Twitter


## Code Examples
How does one go about using it?
Provide various use cases and code examples here.

```js
for(let user in twitterUsers) {
        for (let tweet of twitterUsers[user].tweets) {
            const tweetObj = {};       
            tweetObj.userDisplayName = twitterUsers[user].displayName;
            tweetObj.userName = twitterUsers[user].userName;
            tweetObj.avatar = twitterUsers[user].avatarURL;
            tweetObj.tweet = tweet.text;
            tweetObj.time = tweet.timestamp;

            const tweetDiv = document.createElement('div');
            tweetDiv.classList.add('tweet-content');
            tweetDiv.id = tweet.timestamp;
            tweetDiv.innerHTML = `
                <img src=${tweetObj.avatar}>
                <div>
                    <div class="tweet-name-display">
                        <h4>${tweetObj.userDisplayName}</h4>
                        <img src="./assets/verified-symbol.jpeg">
                        <p class="grey-p">${tweetObj.userName} • </p>
                        <p class="grey-p">${timeAgo(tweet.timestamp)}</p>
                    </div>
                    <div class="tweet">
                        <p>${tweetObj.tweet}</p>
                    </div>
                </div>
            `;
            
            tweetsCtr.appendChild(tweetDiv);
        } 
    }
```


## Project Status
Project is: _complete_ 


## Contact
Created by [@manovak24](https://github.com/manovak24) - feel free to contact me!