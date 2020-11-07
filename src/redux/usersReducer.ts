import { UsersType } from './../types/types';
import { usersAPI } from '../api/api'
import {AppStateType, InferActionsTypes} from "./reduxStore";
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

type ActionsTypes = InferActionsTypes<typeof actions >

export const actions = {
  followSuccess: (userId: number) => ({ type: FOLLOW, userId } as const),
  unfollowSuccess: (userId: number) => ({ type: UNFOLLOW, userId } as const),
  setUsers: (users: Array<UsersType>) => ({ type: SET_USERS, users } as const),
  setCurrentPage: (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const),
  setTotalUsersCount: (totalUsersCount: number) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount } as const),
  toggleIsFetching: (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching } as const),
  toggleIsFollowing: (isFetching: boolean, userId: number) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } as const)
}

type DispatchType = Dispatch<ActionsTypes>
type GetStateType = () => AppStateType

export const requestUsers = (page: number, pageSize: number) => {
  return async (dispatch: DispatchType, getState: GetStateType ) => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setCurrentPage(page))

    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalUsersCount(data.totalCount))
  }
}

export const follow = (userId: number) => {
  return async (dispatch: DispatchType, getState: GetStateType) => {
    dispatch(actions.toggleIsFollowing(true, userId))
    const response = await usersAPI.follow(userId)
    if (response.data.resultCode === 0) {
      dispatch(actions.followSuccess(userId))
    }
    dispatch(actions.toggleIsFollowing(false, userId))
  }
}

export const unfollow = (userId: number) => {
  return async (dispatch: DispatchType, getState: GetStateType) => {
    dispatch(actions.toggleIsFollowing(true, userId))
    const response = await usersAPI.unfollow(userId)
    if (response.data.resultCode === 0) {
      dispatch(actions.unfollowSuccess(userId))
    }
    dispatch(actions.toggleIsFollowing(false, userId))
  }
}

export default usersReducer