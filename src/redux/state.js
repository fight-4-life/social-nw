import { rerenderEntireTree } from "../render";

let state = {
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

}
export let addPost = () => {
  let newPost = {
    id: 4,
    post: state.profilePage.newPostText,
    likesCount: 0
  }

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updatePostText = (newText) => {
  state.profilePage.newPostText = newText;
  console.log(newText)
  rerenderEntireTree(state);
}

export let addMessage = () => {
  let newMessage = { 
    id: 5, 
    message: state.dialogsPage.newMessageText 
  }
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';

  console.log(newMessage)
  rerenderEntireTree(state);
}

export let updateMessageText = (newMsgText) => {
  state.dialogsPage.newMessageText = newMsgText;
  console.log(newMsgText)
  rerenderEntireTree(state);
}

export default state;