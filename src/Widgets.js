import React from 'react'
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";



function Widgets() {
    return ( <
        div className = "widgets" >
        <
        div className = "widgtes__input" >
        <
        SearchIcon className = "widgets__searchIcon" / >
        <
        input placeholder = "Search Twitter"
        type = "text" / >
        <
        /div> <
        div className = "widgets__widgetContainer" >
        <
        h2 > What 's happening</h2> <
        TwitterTweetEmbed tweetId = { "759043035355312128" }
        /> <
        TwitterTweetEmbed tweetId = { "858551177860055040" }
        />

        <
        TwitterTimelineEmbed sourceType = "profile"
        screenName = "Ashish k"
        options = {
            { height: 300 } }
        />

        <
        TwitterShareButton url = { "https://facebook.com/ashishkurapati" }
        options = {
            { text: "#hello friends", via: "Asish k", } }
        /> <
        /div>

        <
        /div>
    )
}

export default Widgets;