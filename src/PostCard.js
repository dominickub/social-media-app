import React from 'react'
// import styled from "styled-components"


function PostCard({ comments,deletePost,id }) {

    function handleDelete(){
        fetch(`http://localhost:3000/posts/${id}`,{
          method:'DELETE',
        })
        deletePost(id)
      }


    return (

        <div>
           
            <p className="pTags"> <button className="emoji-button delete" onClick={e => handleDelete(id)}>🗑</button>  {comments}</p>

        </div>
    )
}


export default PostCard;
// const CommentSection = styled.div
//     `


// `
