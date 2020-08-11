import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './../Profile/MyPosts/Post/Post';

const Profile = (props) => {

  let postsElements = props.state.profilePage.posts.map(post => <Post message={post.post} likes={post.likesCount} />);

  return (
    <div className={styles.content}>
      <ProfileInfo />
      <MyPosts postsElements={postsElements}/>
    </div>
  );
}

export default Profile;