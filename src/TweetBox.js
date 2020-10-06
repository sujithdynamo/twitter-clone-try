import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
    return ( <
        div className = "tweetBox" >
        <
        form >
        <
        div className = "tweetBox__input" >
        <
        Avatar src = "https://instagram.fvga2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/104088371_282358163134991_203848718169117349_n.jpg?_nc_ht=instagram.fvga2-1.fna.fbcdn.net&_nc_ohc=1JYx7ht6vBwAX8bH8On&oh=5a2fb7edca8af92a8015a6897a3d0c5f&oe=5FA5AEF8" / >
        <
        div / >

        <
        input placeholder = "What is happening?"
        type = "text" / >

        <
        /div>

        <
        input className = "tweetBox__imageInput"
        placeholder = "Enter image url"
        type = "text" / >


        <
        /form> <
        Button className = "tweetBox__tweetButton" > Tweet < /Button>

        <
        /div>

    );
}

export default TweetBox;