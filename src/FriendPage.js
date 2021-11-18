import React, { useState } from "react";
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

  function handleFriend(data) {
    console.log("is this working", data)
    var newArray = ([...arrayOfFriends, data])
    setarrayOfFriends(newArray)
  }

  return (
    <main>
      <p>hello there</p>
      <NewFriendForm arrayOfFriends={arrayOfFriends} setarrayOfFriends={setarrayOfFriends} handleFriend={handleFriend}/>
      <FriendsList arrayOfFriends={arrayOfFriends} setarrayOfFriends={setarrayOfFriends} />
    </main>
  );
}

export default FriendPage;
