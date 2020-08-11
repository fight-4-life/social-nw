import React from 'react';
import styles from './MyPosts.module.css';

const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text)
  }

  return (
    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <div>
        <textarea ref={newPostElement}></textarea>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={styles.post}>
        {props.postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
