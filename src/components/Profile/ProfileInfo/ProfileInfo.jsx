import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div className={styles.descriptionBlock}>
      <div>
        <p>About me: {profile.aboutMe}</p>
      </div>
      <div >
        <img src={profile.photos.large} />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
}

export default ProfileInfo;