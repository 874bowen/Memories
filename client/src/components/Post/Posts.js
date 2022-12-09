import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
   <div className=' bg-white '>
      <h1>Posts</h1>
      <Post />
      <Post />
      </div>
  )
}

export default Posts