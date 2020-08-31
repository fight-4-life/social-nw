import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => { 

  let postsElements = props.profilePage.posts.map(post => <Post message={post.post} key={post.id} likes={post.likesCount} />);

  let newPostElement = React.createRef();

  let addNewPost = () => {
    props.addNewPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text);
  }

  return (
    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <div>
        <textarea placeholder='Enter your text' ref={newPostElement}
         onChange={onPostChange} value={props.newPostText}/>
        <div>
          <button onClick={ addNewPost }>Add post</button>
        </div>
      </div>
      <div className={styles.post}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
