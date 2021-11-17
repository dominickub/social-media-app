import React,{useEffect,useState} from 'react'
import NewPostForm from './NewPostForm'
import PostsList from './PostsList'
import "./Profile.css"

function Profile() {

    const [posts,setPosts]=useState([])

    
      useEffect(() => {
        fetch("http://localhost:3000/posts")
        .then(response => response.json())
        .then(data => setPosts(data) )
      }, [])

  
    function handleAddPost(newPost){
      const newPosts =[...posts,newPost]
      setPosts(newPosts)
      
    }

    // function deletePost(postId){
    //   setPosts(posts.filter(post => post.id !== postId))
        
    // }
    function deletePost(id){
      const newPostings = posts.filter((post)=>post.id !==id)
      setPosts(newPostings)
    }

    // const filteredplants = posts.filter(post => post.name.toLowerCase().includes(search.toLocaleLowerCase()))

    console.log(posts)

    return (
    <div id ="profile">  
        <div  className="header">
              <img className="profilePicture" alt="batman" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVyQMP1k2EL_6pz-Qqbz3p8QviHfNgwdYJCA&usqp=CAU" />
          <div>

            <h1>Batman</h1><br/>
            <p className="description">I casually protect the Gotham</p>
          </div>
        
        </div>
            <NewPostForm handleAddPost={handleAddPost}/>
            <PostsList deletePost={deletePost} posts ={posts}/>
            <p></p>
       
    </div>
    )
}

export default Profile

