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

      <Post message='Hey you there!' likes='4 ' />
      <Post message='Bro.. nice 2 meet u' likes='46 ' />
      <Post message=':O:O:O:O' likes='12 ' />

    </div>
  );
}

export default MyPosts;
