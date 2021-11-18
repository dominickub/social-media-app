import React, { useState, useEffect } from "react";
import NewFriendForm from "./NewFriendForm";
import FriendsList from "./FriendsList";
// import Search from "./Search";

function FriendPage() {
  const [arrayOfFriends, setarrayOfFriends] = useState([])
  // const [searchName, setSearchName] = useState('')

  // function renderSearchedPlants(e) {
  //   setSearchName(e.target.value)
  //   console.log(searchName)
  //   const searchArray = arrayOfFriends.filter(plant => {return (plant.name.toLowerCase().includes(e.target.value))})
  //   setarrayOfFriends(searchArray)
  // }

  useEffect(() => {
    fetch("http://localhost:3000/people")
    .then(r => r.json())
    .then(data => setarrayOfFriends(data))
    }, [])

  function handleFriend(data) {
    console.log("is this working", data)
    const newArray = [...arrayOfFriends, data]
    setarrayOfFriends(newArray)
  }

  return (

    <div id='html'>
      <NewFriendForm arrayOfFriends={arrayOfFriends} setarrayOfFriends={setarrayOfFriends} handleFriend={handleFriend}/>
      <FriendsList arrayOfFriends={arrayOfFriends} setarrayOfFriends={setarrayOfFriends} />
    </div>
  );
}

export default FriendPage;
