import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../common/FormsControls/FormsControls'
import styles from '../../common/FormsControls/FormsControls.module.css'
import {ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType
    handleSubmit: () => void
    error: string
}

const ProfileDataForm: React.FC<PropsType> = ({ profile, handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button className={styles.saveButton}>save</button></div>
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                Full Name: <b>{profile.fullName}</b>
            </div>
            <div>
                <Field placeholder={'Full name'} name={'fullName'}
                    component={Input} validate={[]} />
            </div>
            <div>
                <b>Looking for a job:</b>
                <Field name={'lookingForAJob'} component={Input}
                    type={'checkbox'} validate={[]} />
            </div>

            <div>
                <b>My prof skills:</b> {profile.lookingForAJobDescription}
                <Field placeholder={'Enter your skills'}
                    name={'lookingForAJobDescription'} component={Textarea} validate={[]} />
            </div>

            <div>
                <b>About me: {profile.aboutMe}</b>
                <Field placeholder={'Please tell about you'} name={'aboutMe'} component={Textarea} validate={[]} />

            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key}> 
                       {key}: {<Field placeholder={`https//:${key}.com`} name={'contacts.' + key}
                    component={Input} validate={[]} />}
                    </div>
                })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({ form: 'editProfile' })(ProfileDataForm)

export default ProfileDataFormReduxForm