import {FormAction, stopSubmit} from 'redux-form';
import {authAPI} from "../api/authApi";
import {securityAPI} from "../api/securityApi";
import {ResultCodeEnum} from "../api/api";
import {BaseThunkType, InferActionsTypes} from "./reduxStore";
import {Action} from "redux";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null // if null captcha is not required
}

const actions = {
    setAuthUserData: (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
        type: SET_USER_DATA, payload: {id, login, email, isAuth}
    } as const),

    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
    } as const)

}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions >
type ThunkType = BaseThunkType<ActionsTypes | FormAction>

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

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const meData = await authAPI.me()
    const {id, login, email} = meData.data
    if (meData.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.setAuthUserData(id, login, email, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    const loginData = await authAPI.login(email, password, rememberMe, captcha)
    if (loginData.resultCode === ResultCodeEnum.Success) {
        // success get auth data
        dispatch(getAuthUserData())
    } else {
        if (loginData.resultCode === ResultCodeEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        let messaage = loginData.messages.length > 0 ? loginData.messages[0] : 'Some error!'
        dispatch(stopSubmit('login', {_error: messaage}))
    }
}

export const logout = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer