import { getAuthUserData } from "./authReducer";
import {InferActionsTypes} from "./reduxStore";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

const initialState = {
  initialized: false
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {

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

const actions = {
  initializedSuccess: ()  => ({ type: INITIALIZED_SUCCESS })
}

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData())
  promise.then(() => {
    dispatch(actions.initializedSuccess())
  })
}

export default appReducer
