import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {

  _state: {
    profilePage: {
      posts: [
        { id: 1, post: 'Hey you there!', likesCount: '4 ' },
        { id: 2, post: 'Bro.. nice 2 meet u', likesCount: '46 ' },
        { id: 3, post: ':O:O:O:O', likesCount: '12 ' },
      ],
      newPostText: ''
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
      newMessageText: ''
    }

  },
  _callSubscriber() { },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

    this._callSubscriber(this._state); 
  }
}

export default store;
