import React, { useState } from "react";

function FriendCard({friendObj}) {
const [soldOut, setSoldOut] = useState(false)
  function markSoldOut() {
    setSoldOut(true)
  }
  return (
    <div class="container">
  <div class="avatar-flip">
    <img src={friendObj.profilePic} height="150" width="150"/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCR9InYl9bb__R2yKCZ9Hl9voocomgBG3DKA&usqp=CAU" height="150" width="150"/>
  </div>
  <h2>{friendObj.name}</h2>
  <h4>Address: {friendObj.address}</h4>
  <p>I am Ben Affleck. I play Batman and other such characters in Hollywood movies</p>
  <p>Please see my films</p>
</div>
  );
}
export default FriendCard;

{/* <li className="card">
      <div id="cardDiv">
      <img src={friendObj.profilePic} alt={"plant name"} />
      <h4>{friendObj.name}</h4>
      <p>Price: {friendObj.address}</p>
      {true ? (
        <button className="primary" onClick={markSoldOut}>{(soldOut) ? "Sold Out" : "In Stock"}</button>
      ) : (
        <button>Out of Stock</button>
      )}
      </div>
    </li> */}