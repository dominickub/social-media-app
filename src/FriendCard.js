import React, { useState } from "react";

function FriendCard({friendObj}) {
const [soldOut, setSoldOut] = useState(false)

  function markSoldOut() {
    setSoldOut(true)
  }


  return (
    <li className="card">
      <img src={friendObj.profilePic} alt={"plant name"} />
      <h4>{friendObj.name}</h4>
      <p>Price: {friendObj.address}</p>
      {true ? (
        <button className="primary" onClick={markSoldOut}>{(soldOut) ? "Sold Out" : "In Stock"}</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default FriendCard;