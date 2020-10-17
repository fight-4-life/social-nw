import { getAuthUserData } from "./authReducer";


const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

type InitialStateType = {
  initialized: boolean
}

let initialState: InitialStateType = {
  initialized: false
}

const appReducer = (state = initialState, action: any): InitialStateType => {

  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}

export const initializedSuccess = (): InitializedSuccessActionType  => ({ type: INITIALIZED_SUCCESS })

type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData())
  promise.then(() => {
    dispatch(initializedSuccess())
  })
}

export default appReducer
