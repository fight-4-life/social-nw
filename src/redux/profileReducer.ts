import {PhotosType, ProfileType} from './../types/types';
import { profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

type PostsType = {
  id: number
  post: string
  likesCount: number
}

let initialState = {
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

export const getUserProfile = (userId: number) => {
  return async (dispatch: any) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
  }
}

export const getStatus = (userId: number) => {
  return async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
  }
}

export const updateStatus = (status: string) => {
  return async (dispatch: any) => {
    try {
      const response = await profileAPI.updateStatus(status)
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    } catch (error) {
      alert(error) //here will be error handler
    }
  }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.id
  let response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    let key = response.data.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase();
    dispatch(stopSubmit('editProfile', {
      contacts: { [key]: response.data.messages[0] },
    }))
    return Promise.reject(response.data.messages[0])
  }
  //4 show general error {_error: response.data.messages[0] }

}
type AddNewPostActionCreatorType = {
  type: typeof ADD_POST
  newPostText: string
}

export const addNewPostActionCreator = (newPostText: string): AddNewPostActionCreatorType => ({ type: ADD_POST, newPostText })

type SetUserProfileActionType =
  {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
  }

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })

type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string 
}

export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status })

type DeletePostActionType = {
  type: typeof DELETE_POST
  id: number
}

export const deletePost = (id: number): DeletePostActionType => ({ type: DELETE_POST, id })

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType 
}

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos })

export default profileReducer