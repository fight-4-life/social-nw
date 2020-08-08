import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <div>
        <textarea></textarea>
        <div>
        <button>Add post</button>
        </div>
      </div>
      <div className={styles.post}> 
      <Post message='Hey you there!' likes='4 ' />
      <Post message='Bro.. nice 2 meet u' likes='46 ' />
      <Post message=':O:O:O:O' likes='12 ' />
      </div>
    </div>
  );
}

export default MyPosts;
