import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>

      <Post />
      <Post />
      <Post />

    </div>
  );
}

export default MyPosts;
