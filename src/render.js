import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updatePostText, addMessage, updateMessageText } from './redux/state';

export let rerenderEntireTree = (state) => {

    ReactDOM.render(

        <React.StrictMode>
            <App state={state}
            addPost={addPost}
            updatePostText={updatePostText} 
            addMessage={addMessage}
            updateMessageText={updateMessageText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

