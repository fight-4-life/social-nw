import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
  return (
    <div className={styles.content}>

      <img src='https://www.postoffice.co.uk/dam/jcr:67391008-e00a-4c32-a87c-76f2b6e2017d/travel-money_627x277.png' />
      <div>
        avatar, description
      </div>

      <MyPosts />

    </div>
  );
}

export default Profile;