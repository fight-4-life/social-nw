import { authAPI, securityAPI } from '../api/api'
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null // if null captcha is not required
}

const authReducer = (state = initialState, action) => {

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

export const setAuthUserData = (id, login, email, isAuth) => ({
  type: SET_USER_DATA, payload: { id, login, email, isAuth }
})

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl }
})


export const getAuthUserData = () => (dispatch) => {
  return authAPI.me().then(response => {
    const { id, login, email } = response.data.data
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(id, login, email, true))
    }
  })
}

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
  authAPI.login(email, password, rememberMe, captcha)
    .then(response => {
      if (response.data.resultCode === 0) {
        // success get auth data
        dispatch(getAuthUserData())
      } else {
        if (response.data.resultCode === 10) {
          dispatch(getCaptchaUrl ())
        }
        let messaage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error!'
        dispatch(stopSubmit('login', { _error: messaage }))
      }
    })
}

export const logout = () => (dispatch) => {
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
}

export const getCaptchaUrl = () => (dispatch) => {
  securityAPI.getCaptchaUrl()
    .then(response => {
      const captchaUrl = response.data.url
      dispatch(getCaptchaUrlSuccess(captchaUrl))

    }
    )
}

export default authReducer