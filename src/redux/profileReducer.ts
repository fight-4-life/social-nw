import {PhotosType, ProfileType} from './../types/types';
import {FormAction, stopSubmit} from 'redux-form';
import {profileAPI} from "../api/profileApi";
import {BaseThunkType, InferActionsTypes} from "./reduxStore";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

export const actions = {
  addNewPostActionCreator: (newPostText: string) => ({ type: ADD_POST, newPostText }),
  setUserProfile: (profile: ProfileType) => ({ type: SET_USER_PROFILE, profile }),
  setStatus: (status: string) => ({ type: SET_STATUS, status }),
  deletePost: (id: number) => ({ type: DELETE_POST, id }),
  savePhotoSuccess: (photos: PhotosType) => ({ type: SAVE_PHOTO_SUCCESS, photos })
}

type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>

export type PostsType = {
  id: number
  post: string
  likesCount: number
}

const initialState = {
  posts: [
    { id: 1, post: 'Hey you there!', likesCount: 4 },
    { id: 2, post: 'Bro.. nice 2 meet u', likesCount: 46 },
    { id: 3, post: ':O:O:O:O', likesCount: 12 }
  ] as Array<PostsType>,
  profile: null as ProfileType | null,
  status: ''
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
        ...state, posts: state.posts.filter(p => p.id !== action.id)
      }
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state, profile: { ...state.profile, photos: action.photos } as ProfileType
      }
    default:
      return state
  }
}

export const getUserProfile = (userId: number): ThunkType => {
  return async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(response))
  }
}

export const getStatus = (userId: number): ThunkType => {
  return async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(response))
  }
}

export const updateStatus = (status: string): ThunkType => {
  return async (dispatch) => {
    try {
      const response = await profileAPI.updateStatus(status)
      if (response.resultCode === 0) {
        dispatch(actions.setStatus(status))
      }
    } catch (error) {
      alert(error) //here will be error handler
    }
  }
}

export const savePhoto = (file: any): ThunkType => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(response.data.photos));
  }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.id
  const response = await profileAPI.saveProfile(profile);
  if (response.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    // let key = response.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase();
    dispatch(stopSubmit('editProfile', {
      _error: response.messages[0]
      // contacts: { [key]: response.messages[0] },
    }))
    return Promise.reject(response.messages[0])
  }
  //4 show general error {_error: response.data.messages[0] }

}

export default profileReducer