import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post'
import {Field, reduxForm} from 'redux-form'

const AddPostMessageForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
          <div>
              <Field component={'textarea'} placeholder={'Type your message'} name={'newPostText'} />
          </div>
          <div>
          <button>Add post</button>
        </div>
          
      </form>
  )
}

const AddPostMessageReduxForm = reduxForm({form: 'postMessageForm'})(AddPostMessageForm)

const MyPosts = (props) => { 

  let postsElements = props.profilePage.posts.map(post => <Post message={post.post} key={post.id} likes={post.likesCount} />);

  let addNewPostText = (values) => {
    props.addNewPost(values.newPostText);
  }

  return (
    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <div>
        <AddPostMessageReduxForm onSubmit={addNewPostText}/>
      </div>
      <div className={styles.post}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
