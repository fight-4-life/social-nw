const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

export const sendMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const onMessageChangeActionCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, newMsgText: text })

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
  ],
  newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 5,
        message: state.newMessageText
      }
      let stateCopy = {...state}
      stateCopy.messages = [...state.messages]
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = '';
      console.log(newMessage);
      return stateCopy
    }
    case UPDATE_MESSAGE_TEXT: {
      let stateCopy = {...state}
      stateCopy.newMessageText = action.newMsgText;
      console.log(action.newMsgText)
      return stateCopy
    }
    default:
      return state
  }
}

export default dialogsReducer