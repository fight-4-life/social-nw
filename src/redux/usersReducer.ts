import { UsersType } from './../types/types';
import { usersAPI } from '../api/api.js'
import {AppStateType} from "./reduxStore";
import {Dispatch} from "redux";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING';

let initialState = {
  users: [] as Array<UsersType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number> // array of users ids
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        }
        )
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        }
        )
      }
    case SET_USERS:
      return { ...state, users: action.users }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state
  }
}

type ActionsTypes = FollowSuccesActionType | UnollowSuccesActionType | SetUsersActionType |
    SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleIsFetchingActionType |
    ToggleIsFollofingActionType

type FollowSuccesActionType = {
  type: typeof FOLLOW
  userId: number
}

type UnollowSuccesActionType = {
  type: typeof UNFOLLOW
  userId: number
}

type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<UsersType>
}

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}

type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalUsersCount: number
}

type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}

type ToggleIsFollofingActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}

export const followSuccess = (userId: number): FollowSuccesActionType => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId: number): UnollowSuccesActionType => ({ type: UNFOLLOW, userId })
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowing = (isFetching: boolean, userId: number): ToggleIsFollofingActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

type DispatchType = Dispatch<ActionsTypes>
type GetStateType = () => AppStateType

export const requestUsers = (page: number, pageSize: number) => {
  return async (dispatch: DispatchType, getState: GetStateType ) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))

    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
  }
}

export const follow = (userId: number) => {
  return async (dispatch: DispatchType, getState: GetStateType) => {
    dispatch(toggleIsFollowing(true, userId))
    const response = await usersAPI.follow(userId)
    if (response.data.resultCode === 0) {
      dispatch(followSuccess(userId))
    }
    dispatch(toggleIsFollowing(false, userId))
  }
}

export const unfollow = (userId: number) => {
  return async (dispatch: DispatchType, getState: GetStateType) => {
    dispatch(toggleIsFollowing(true, userId))
    const response = await usersAPI.unfollow(userId)
    if (response.data.resultCode === 0) {
      dispatch(unfollowSuccess(userId))
    }
    dispatch(toggleIsFollowing(false, userId))
  }
}

export default usersReducer