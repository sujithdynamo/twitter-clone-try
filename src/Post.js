import React from 'react';
import './Post.css';
import { Avatar, Button } from "@material-ui/core";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import RepeatIcon from '@material-ui/icons/RepeatOneOutlined';
import FavouriteBorderIcon from '@material-ui/icons/FavoriteOutlined';
import PublishIcon from '@material-ui/icons/PublishOutlined';

function Post({
    displayName,
    username,
    verified,
    timestamp,
    text,
    image,
    avatar,
}) {
    return ( <
        div className = "post" >
        <
        div className = "post__avatar" >
        <
        Avatar src = "https://instagram.fvga2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/87482393_487738448776410_7243605418654564352_n.jpg?_nc_ht=instagram.fvga2-1.fna.fbcdn.net&_nc_ohc=A3yB5suxN58AX9oO-GV&oh=a4a09848437e55b708d41deb923c651d&oe=5FA543B7" > < /Avatar> <
        /div > <
        div className = "post__body" >
        <
        div className = "post__header" >
        <
        div className = "post__headerText" >
        <
        h3 >
        Bharath { " " } <
        span className = "post__headerSpecial" >
        <
        VerifiedUserIcon className = "post__badge" / > @bharathdeva99

        <
        /span> <
        /h3>


        <
        /div> <
        div className = "post__headerDescription" >
        <
        p >
        friend in need is a friend indeed(
            try it) <
        /p>

        <
        /div>

        <
        /div> <
        img className = "post__Image"
        src = "happy.gif"
        alt = "" / >

        <
        div className = "post__footer" >
        <
        ChatBubbleOutlineIcon fontsize = "small" / >
        <
        RepeatIcon fontsize = "small" / >
        <
        FavouriteBorderIcon fontsize = "small" / >
        <
        PublishIcon fontsize = "small" / >

        <
        /div> <
        /div>

        <
        /div>
    );
}

export default Post;