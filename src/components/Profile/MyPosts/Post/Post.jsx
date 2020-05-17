import React from 'react';
import styles from './Post.module.css';

function Post() {
  return (
    <div>
      <div className={styles.item}>
        <img src='https://thumbs.dreamstime.com/b/cute-young-man-avatar-cartoon-monochrome-userpic-vector-illustration-112487552.jpg' />
          post
        </div>
      <div><button>Like</button></div>
    </div>
  );
}

export default Post;
