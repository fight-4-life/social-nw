import React from 'react';
import MyPosts, {MapDispatchPropsType, MyPostsPropsType} from './MyPosts';
import {actions} from '../../../redux/profileReducer';
import {connect} from 'react-redux';
import {AppStateType} from "../../../redux/reduxStore";

const MapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts
    }
}

const MyPostsContainer = connect<MyPostsPropsType, MapDispatchPropsType, {}, AppStateType>(MapStateToProps, {
    addNewPost: actions.addNewPostActionCreator
})(MyPosts)

export default MyPostsContainer;
