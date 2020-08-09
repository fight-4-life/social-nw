import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, post: 'Hey you there!', likesCount: '4 ' },
  { id: 2, post: 'Bro.. nice 2 meet u', likesCount: '46 ' },
  { id: 3, post: ':O:O:O:O', likesCount: '12 ' },
];

let dialogs = [
  { id: 1, name: 'Vavan' },
  { id: 2, name: 'Iren' },
  { id: 3, name: 'Bieven' },
  { id: 4, name: 'Kama' },
  { id: 5, name: 'Maga' },
  { id: 6, name: 'Konek' }
];

let messages = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'Chiferni-ka bratok' },
  { id: 3, message: 'Feel good' },
  { id: 4, message: 'Ok alright' }
];

ReactDOM.render(
 
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
