import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Photos from './components/Photos/Photos';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderComponent from './components/Header/HeaderComponent';
import Login from './components/Login/Login';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderComponent />
        <Nav />
        <div className='app-wrapper-content'>
          <Route
            path='/dialogs'
            render={() => <DialogsContainer
            />}
          />
          <Route path='/profile/:userId?'
            render={() => <ProfileContainer
            />}
          />
          <Route path='/users'
            render={() => <UsersContainer
            />}
          />
          <Route path='/login'
            render={() => <Login
            />}
          />
          <Route path='/photos' component={Photos} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
