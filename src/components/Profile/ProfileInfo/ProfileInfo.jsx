import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/user.png'

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }
  return (
    <div className={styles.descriptionBlock}>
      <div>
        <p>About me: {profile.aboutMe}</p>
      </div>
      <div >
        <img src={profile.photos.large || userPhoto} className={styles.mainPhoto}/>
        {isOwner && 
           <input type={'file'} onChange={onMainPhotoSelected}/>
       }
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
}

export default ProfileInfo;