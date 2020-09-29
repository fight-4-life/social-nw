import { profileAPI } from '../api/api';

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';


let initialState = {
  posts: [
    { id: 1, post: 'Hey you there!', likesCount: '4 ' },
    { id: 2, post: 'Bro.. nice 2 meet u', likesCount: '46 ' },
    { id: 3, post: ':O:O:O:O', likesCount: '12 ' }
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 4, post: action.newPostText, likesCount: 0 }]
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    case SET_USER_PROFILE:
      return {
        ...state, profile: action.profile
      }
    case DELETE_POST:
      return {
        ...state, posts: state.posts.filter(p => p.id != action.id)
      }
    default:
      return state
  }
}

export const getUserProfile = (userId) => {
  return async (dispatch) => {
   let response = await profileAPI.getProfile(userId)
   dispatch(setUserProfile(response.data))

  }
}

export const getStatus = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
      dispatch(setStatus(response.data))

  } 
}

export const updateStatus = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
      }

  }
}

export const addNewPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const setStatus = (status) => ({ type: SET_STATUS, status })

export const deletePost = (id) => ({ type: DELETE_POST, id })

export default profileReducer