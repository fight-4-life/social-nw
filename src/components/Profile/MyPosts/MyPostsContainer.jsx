import React from 'react';
import MyPosts from './MyPosts';
import { addNewPostActionCreator} from '../../../redux/profileReducer';
import { connect } from 'react-redux';

let MapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

let MapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (newPostText) => {
      dispatch(addNewPostActionCreator(newPostText));
    }
  }
}

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)

export default MyPostsContainer;
