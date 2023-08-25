import { useState } from 'react';
import './App.css';
import { useCounter } from './store/useCounter';
import { usePosts } from './store/usePosts';

export default function App() {
  // const { count, increment, decrement } = useCounter()
  // const { postId, creatorId, postText, authorName, publishTime } = usePosts()
  const {deletePost, editPost} = usePosts();
  const { posts } = usePosts()
  console.log(posts);
  return (
    <div className="App">
      {/* <h1>Счетчик:{count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button> */}
      {posts.map(post => {
        return (
          <div className='post-box'>
            <div className='post-title'>
              <h4>{post.authorName}</h4>
              <h5>{post.creatorId}</h5>
              <h6>{post.publishTime}</h6>
            </div>
            <div className='post-text'>
              <p>{post.postId}</p>
              <p>{post.postText}</p>
            </div>
            <button className='post-btn' onClick={deletePost}>Delete</button>
            <button className='post-btn' onClick={editPost}>Edit</button>
          </div>
        ) 
      })}
    </div>
  )
}