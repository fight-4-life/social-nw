import React from 'react';
import MyPosts from './MyPosts';
import {actions} from '../../../redux/profileReducer';
import {connect} from 'react-redux';

let MapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

let MapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (newPostText) => {
            dispatch(actions.addNewPostActionCreator(newPostText));
        }
    }
}

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)

export default MyPostsContainer;
