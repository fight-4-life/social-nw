const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {

  _state: {
    profilePage: {
      posts: [
        { id: 1, post: 'Hey you there!', likesCount: '4 ' },
        { id: 2, post: 'Bro.. nice 2 meet u', likesCount: '46 ' },
        { id: 3, post: ':O:O:O:O', likesCount: '12 ' },
      ],
      newPostText: 'konyara'
    },
    dialogsPage: {
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
      newMessageText: 'react ssssssss'
    }

  },
  _callSubscriber() { },
  getState() {
    return this._state;
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 4,
        post: this._state.profilePage.newPostText,
        likesCount: 0
      }

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      console.log(action.newText)
      this._callSubscriber(this._state);
    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newMessageText
      }
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';

      console.log(newMessage)
      this._callSubscriber(this._state);
    } else if (action.type = 'UPDATE-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.newMsgText;
      console.log(action.newMsgText)
      this._callSubscriber(this._state);
    }
  }
}

export const addNewPostActionCreator = () => ({ type: ADD_POST })

export const onPostChangeActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageActionCreator = () => ({ type: 'ADD-MESSAGE' })

export const onMessageChangeActionCreator = (text) => ({ type: 'UPDATE-MESSAGE-TEXT', newMsgText: text })

export default store;
