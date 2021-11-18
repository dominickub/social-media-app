import React, { useState, useEffect } from "react";
import FriendCard from "./FriendCard";
function FriendsList({arrayOfFriends}) {


  return (
    <ul className="cards">{arrayOfFriends.map((friendObj, ix) => {
      return <FriendCard key={ix} friendObj={friendObj}/>
    })}</ul>
  );
}
export default FriendsList;
