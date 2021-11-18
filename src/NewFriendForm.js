import React, { useState } from "react";

function NewFriendForm({arrayOfFriends, setarrayOfFriends, handleFriend}) {
const [name, setName] = useState('')
const [image, setImage] = useState('')
const [price, setPrice] = useState('')

function captureName(e) {
  setName(e.target.value)
}

function captureImage(e) {
  setImage(e.target.value)
}

function capturePrice(e) {
  setPrice(e.target.value)
}

function addNewFriend(e) {
  e.preventDefault()

  const newObj = {
    name: name,
    image: image,
    price: price
  }
  console.log("this is the new object", newObj)
fetch("http://localhost:3000/people", {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newObj)
})
.then(r => r.json())
.then(data => {
  handleFriend(data)
  })
  e.target.reset()

}

  return (
    <div className="new-plant-form">
      <h2>New </h2>
      <form onSubmit={addNewFriend}>
        <input type="text" name="name" placeholder="Name" onChange={captureName}/>
        <input type="text" name="image" placeholder="Image URL" onChange={captureImage}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={capturePrice}/>
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
}

export default NewFriendForm;
