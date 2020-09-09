import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import { Redirect } from 'react-router-dom';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  if (!props.isAuth) return  <Redirect to={'/login'}/>

  return ( 
    <div className={styles.content}>
      <img src='https://www.postoffice.co.uk/dam/jcr:67391008-e00a-4c32-a87c-76f2b6e2017d/travel-money_627x277.png' />
      <div className={styles.descriptionBlock}>
        <div>
          <p>About me: {props.profile.aboutMe}</p>
        </div>
      
        <div>
        <img src={props.profile.photos.large} />
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;