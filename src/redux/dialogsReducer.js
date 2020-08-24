const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

export const sendMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const onMessageChangeActionCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, newMsgText: text })

const dialogsReducer = (state, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText
      }
      state.messages.push(newMessage);
      state.newMessageText = '';
      console.log(newMessage);
      return state
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.newMsgText;
      console.log(action.newMsgText)
      return state
    default:
      return state
  }
}

export default dialogsReducer