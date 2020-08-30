import React from 'react';
import MyPosts from './MyPosts';
import { addNewPostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

let MapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    newPostText: state.profilePage.newPostText
  }
}

let MapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => {
      dispatch(addNewPostActionCreator());
    },
    onPostChange: (text) => {
      let action = onPostChangeActionCreator(text)
      dispatch(action)
    }
  }
}

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)

export default MyPostsContainer;
