import React from 'react';
import styles from './Post.module.css';
import smallUserpic from '../../../../assets/mrrobot.png'

function Post(props) {
  return (
    <div>
      <div className={styles.item}>
        <img src={smallUserpic} alt='small userpic'/>
          {props.message}
        </div>
  <div><button> {props.likes} likes </button></div>
    </div>
  );
}

export default Post;
