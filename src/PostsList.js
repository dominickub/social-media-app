import React from 'react'
import PostCard from "./PostCard"

function PostsList({ posts,deletePost }) {
    console.log(posts)
    return (

        <ul className="cards" >{posts.map(post => <PostCard deletePost={deletePost} comments={post.comments} key={post.id} id={post.id} />)}</ul>

    )
}

export default PostsList
