import React from 'react';
import styles from './MyPosts.module.css';

const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let addNewPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text); 
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatePostText(text)
  }

  return (
    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <div>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.state.profilePage.newPostText}/>
        <div>
          <button onClick={ addNewPost }>Add post</button>
        </div>
      </div>
      <div className={styles.post}>
        {props.postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
