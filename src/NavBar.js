import React from "react";
import {Link} from "react-router-dom"

function NavBar() {
    
   
    
    return (
        <nav className = "navBar">
            <Link to="/FriendPage">Friend Page</Link>
            <Link to="/About">About</Link>
            <Link to="/Profile">Profile</Link>
        </nav>
    );
}

export default NavBar;