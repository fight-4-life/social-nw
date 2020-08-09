import React from 'react';
import styles from './MyPosts.module.css';

const MyPosts = (props) => {

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
        {props.postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
