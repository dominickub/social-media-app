import React, { useState } from "react";

function FriendCard({friendObj}) {
// const [soldOut, setSoldOut] = useState(false)
//   function markSoldOut() {
//     setSoldOut(true)
//   }
  return (
    <div class="container">
  <div class="avatar-flip">
    <img src={friendObj.profilePicFront} height="150" width="150"/>
    <img src={friendObj.profilePicBack} height="150" width="150"/>
  </div>
  <h2>{friendObj.name}</h2>
  <h4>Superpowers: {friendObj.powers}</h4>
  <p>{friendObj.bio}</p>
  <p>Please see my films</p>
</div>
  );
}
export default FriendCard;

/* <li className="card">
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
    </li> */