const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

type SendMessageActionCreatorType = {
  type: typeof ADD_MESSAGE
  newMessageText: string
}

export const sendMessageActionCreator = (newMessageText: string):SendMessageActionCreatorType => ({ type: ADD_MESSAGE, newMessageText })

type DialogType = { 
  id: number 
  name: string 
}

type MessageType = { 
  id: number 
  message: string 
}

let initialState = {
  dialogs: [
    { id: 1, name: 'Vavan' },
    { id: 2, name: 'Iren' },
    { id: 3, name: 'Bieven' },
    { id: 4, name: 'Kama' },
    { id: 5, name: 'Maga' },
    { id: 6, name: 'Konek' }
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'What do we get for 10 dollars?' },
    { id: 3, message: 'Everything' },
    { id: 4, message: 'Ok alright' }
  ] as Array<MessageType>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let messageText = action.newMessageText
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: messageText }]
      }
    default:
      return state
  }
}

export default dialogsReducer