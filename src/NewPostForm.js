import React,{useState} from 'react'

function NewPostForm({handleAddPost}) {
  const[comments,setComments]=useState("")

    function handleSubmit(e){
      
        e.preventDefault()
        fetch ('http://localhost:3000/posts', {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            comments: comments 
          })
          })
        .then(response => response.json())
        .then(data => {
          handleAddPost(data)
          })
          e.target.reset()
        
        
      }
      function onChangePost(e){
        setComments(e.target.value)
      }
    return (
    <div>
        <form onSubmit = {handleSubmit} >
        <input type="text" name="comments" placeholder="What are you thinking?" onChange={onChangePost}/>
        <button type="submit"> Post</button>
        </form>
            
    </div>
    )
}

export default NewPostForm
