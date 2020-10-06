import React from 'react';
import './Sidebar.css';
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from '@material-ui/icons/Home';
import SidebarOption from "./SidebarOption";
import SearchIcon from "@material-ui/icons/Search";
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { Button } from "@material-ui/core";


function Sidebar() {
    return ( <
        div className = "sidebar" > { /*Twitter icon*/ } <
        TwitterIcon className = "sidebar__twitterIcon" / >
        <
        SidebarOption active Icon = { HomeIcon }
        text = "Home" / >
        <
        SidebarOption Icon = { SearchIcon }
        text = "Explore" / >
        <
        SidebarOption Icon = { EmailOutlinedIcon }
        text = "Messages" / >
        <
        SidebarOption Icon = { BookmarkBorderOutlinedIcon }
        text = "Bookmarks" / >
        <
        SidebarOption Icon = { ListOutlinedIcon }
        text = "Lists" / >
        <
        SidebarOption Icon = { AccountCircleOutlinedIcon }
        text = "Profile" / >
        <
        SidebarOption Icon = { MoreHorizOutlinedIcon }
        text = "More" / >

        <
        Button variant = "outlined"
        className = "Sidebar_tweet"
        fullWidth > Tweet < /Button>



        <
        /div>
    );
}

export default Sidebar;