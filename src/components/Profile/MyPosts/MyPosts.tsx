import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {required, maxLengthCreator} from '../../../validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';
import {PostsType} from "../../../redux/profileReducer";

type PropsType = {}

const maxLength10 = maxLengthCreator(10)

const AddPostMessageForm: React.FC<InjectedFormProps & PropsType> = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder={'Text post message'} name={'newPostText'}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button className={styles.addPostButton}>Add new post</button>
            </div>
        </form>
    )
}

const AddPostMessageReduxForm = reduxForm({form: 'postMessageForm'})(AddPostMessageForm)

type AddPostFormValuesType = {
    newPostText: string
}

export type MyPostsPropsType = {
    posts: Array<PostsType>
}

export type MapDispatchPropsType = {
    addNewPost: (newPostText: string) => void
}

const MyPosts: React.FC<MyPostsPropsType & MapDispatchPropsType> = React.memo(props => {

    const postsElements = [...props.posts]
        .reverse()
        .map(post => <Post message={post.post} key={post.id} likes={post.likesCount}/>);

    const addNewPostText = (values: AddPostFormValuesType) => {
        props.addNewPost(values.newPostText);
    }

    return (
        <div className={styles.postsBlock}>
            <h2>My posts</h2>
            <div>
                {/*@ts-ignore*/}
                <AddPostMessageReduxForm onSubmit={addNewPostText}/>
            </div>
            <div className={styles.post}>
                {postsElements}
            </div>
        </div>
    )
})

export default MyPosts;
