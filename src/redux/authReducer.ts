import {authAPI, ResultCodeEnum, securityAPI} from '../api/api'
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null // if null captcha is not required
}

type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {

  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

type SetAuthUserDataActionPayloadType = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
}
type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
  type: SET_USER_DATA, payload: { id, login, email, isAuth }
})

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl }
})


export const getAuthUserData = () => async (dispatch: any) => {
  const meData = await authAPI.me()
  const { id, login, email } = meData.data
  if (meData.resultCode === ResultCodeEnum.Success) {
    dispatch(setAuthUserData(id, login, email, true))
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
  const loginData = await authAPI.login(email, password, rememberMe, captcha)
  if (loginData.resultCode === ResultCodeEnum.Success) {
    // success get auth data
    dispatch(getAuthUserData())
  } else {
    if (loginData.resultCode === ResultCodeEnum.CaptchaIsRequired) {
      dispatch(getCaptchaUrl())
    }
    let messaage = loginData.messages.length > 0 ? loginData.messages[0] : 'Some error!'
    dispatch(stopSubmit('login', { _error: messaage }))
  }
}

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer