import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './../Profile/MyPosts/Post/Post';

const Profile = () => {

  let posts = [
    { id: 1, post: 'Hey you there!', likesCount: '4 ' },
    { id: 2, post: 'Bro.. nice 2 meet u', likesCount: '46 ' },
    { id: 3, post: ':O:O:O:O', likesCount: '12 ' },
  ];

  let postsElements = posts.map(post => <Post message={post.post} likes={post.likesCount} />);

  return (
    <div className={styles.content}>
      <ProfileInfo />
      <MyPosts postsElements={postsElements}/>
    </div>
  );
}

export default Profile;