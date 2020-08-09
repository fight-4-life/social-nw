import React from 'react';
import styles from './Post.module.css';

function Post(props) {
  return (
    <div>
      <div className={styles.item}>
        <img src='https://thumbs.dreamstime.com/b/cute-young-man-avatar-cartoon-monochrome-userpic-vector-illustration-112487552.jpg' />
          {props.message}
        </div>
  <div><button> {props.likes} likes </button></div>
    </div>
  );
}

export default Post;
