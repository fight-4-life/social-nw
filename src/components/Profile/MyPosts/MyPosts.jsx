import React from 'react';
import styles from './MyPosts.module.css';
import {addNewPostActionCreator,onPostChangeActionCreator} from '../../../redux/profileReducer';

const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let addNewPost = () => {
    props.dispatch(addNewPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(onPostChangeActionCreator(text))
  }

  return (
    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <div>
        <textarea placeholder='Enter your text' ref={newPostElement} onChange={onPostChange} value={props.state.newPostText}/>
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
