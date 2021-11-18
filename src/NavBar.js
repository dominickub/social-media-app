import React from "react";
import {Link} from "react-router-dom"

function NavBar() {



    return (
        <nav className = "navBar">
            <Link class="hello" to="/FriendPage">Friend Page</Link>
            <Link class="hello" to="/About">About</Link>
            <Link class="hello" to="/Profile">Profile</Link>
        </nav>
    );
}

export default NavBar;