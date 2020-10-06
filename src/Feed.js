import React from 'react';
import TweetBox from './TweetBox';
import './Feed.css';
import Post from './Post';


function Feed() {
    return ( <
        div className = "feed" >

        <
        div className = "feed_header" >
        <
        h1 > Home < /h1> <
        /div>


        <
        TweetBox / >
        <
        Post / >
        <
        Post / >
        <
        Post / >
        <
        Post / >
        <
        Post / >


        <
        /div>


    );
}

export default Feed;