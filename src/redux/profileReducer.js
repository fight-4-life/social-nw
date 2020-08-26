const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addNewPostActionCreator = () => ({ type: ADD_POST })

export const onPostChangeActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

let initialState = {
  posts: [
    { id: 1, post: 'Hey you there!', likesCount: '4 ' },
    { id: 2, post: 'Bro.. nice 2 meet u', likesCount: '46 ' },
    { id: 3, post: ':O:O:O:O', likesCount: '12 ' },
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        post: state.newPostText,
        likesCount: 0
      }
      state.posts.push(newPost)
      state.newPostText = ''
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      console.log(action.newText)
      return state
    default:
      return state
  }
}

export default profileReducer