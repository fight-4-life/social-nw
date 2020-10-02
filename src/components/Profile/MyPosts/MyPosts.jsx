import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10)

const AddPostMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} placeholder={'Text your message'} name={'newPostText'}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>

    </form>
  )
}

const AddPostMessageReduxForm = reduxForm({ form: 'postMessageForm' })(AddPostMessageForm)

const MyPosts = (props) => {

  let postsElements = [...props.posts]
    .reverse()
    .map(post => <Post message={post.post} key={post.id} likes={post.likesCount} />);

  let addNewPostText = (values) => {
    props.addNewPost(values.newPostText);
  }

  return (
    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <div>
        <AddPostMessageReduxForm onSubmit={addNewPostText} />
      </div>
      <div className={styles.post}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
