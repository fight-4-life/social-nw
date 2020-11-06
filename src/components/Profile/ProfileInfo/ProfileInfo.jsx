import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/user.png'
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';
import {Button} from "antd";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

  const [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false)
    })
  }

  return (
    <div className={styles.descriptionBlock}>
      <span className={styles.status}>Status:</span>
      <div className={styles.statusText}>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
      <div className={styles.userName}>
        <b>{profile.fullName}</b>
      </div>
      <img src={profile.photos.large || userPhoto} alt={'userpic'} className={styles.mainPhoto} />
      <div>
        {isOwner &&
          <label className={styles.uploadUserPhotoInput}>
            <input type={'file'} onChange={onMainPhotoSelected} />
            Upload photo
          </label>
        }
      </div>
      {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
        : <ProfileData goToEditMode={() => { setEditMode(true) }}
          profile={profile} isOwner={isOwner} />}
    </div>
  );
}
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner &&
        <div><Button default onClick={goToEditMode}>edit profile</Button></div>}
      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lookingForAJob &&
        <div>
          <b>My prof skills:</b> {profile.lookingForAJobDescription}
        </div>}
      <div>
        <b>About me: </b>{profile.aboutMe}
      </div>
      <div>
        <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return <div className={styles.contacts}>{contactTitle}: {contactValue}</div>
}

export default ProfileInfo;