const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

export const sendMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText })

let initialState = {
  dialogs: [
    { id: 1, name: 'Vavan' },
    { id: 2, name: 'Iren' },
    { id: 3, name: 'Bieven' },
    { id: 4, name: 'Kama' },
    { id: 5, name: 'Maga' },
    { id: 6, name: 'Konek' }
  ],
  messages: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'Chiferni-ka bratok' },
    { id: 3, message: 'Feel good' },
    { id: 4, message: 'Ok alright' }
  ]
}

const dialogsReducer = (state = initialState, action) => {

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