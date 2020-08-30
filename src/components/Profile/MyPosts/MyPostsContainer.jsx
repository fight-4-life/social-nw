import React from 'react';
import MyPosts from './MyPosts';
import {addNewPostActionCreator,onPostChangeActionCreator} from '../../../redux/profileReducer';
import { connect } from 'react-redux';


// const MyPostsContainer = (props) => {
//   let state = props.store.getState().profilePage;

//   let postsElements = state.posts.map(post => <Post message={post.post} likes={post.likesCount} />);

//   let addNewPost = () => {
//     props.store.dispatch(addNewPostActionCreator());
//   }

//   let onPostChange = (text) => {
//     let action = onPostChangeActionCreator(text)
//     props.store.dispatch(action)
//   }

//   return (
//     <MyPosts addNewPost={addNewPost} 
//     onPostChange={onPostChange}  
//       state={props.store}
//       dispatch={props.dispatch}
//       postsElements={postsElements}
//       profilePage={state}
//     />
//   );
// } 

let MapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
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
