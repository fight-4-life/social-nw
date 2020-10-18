import React, { Suspense } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Photos from './components/Photos/Photos';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderComponent from './components/Header/HeaderComponent';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sideber';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  componentWillUnmount() {
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    // HashRouter used for gh pages. Please use BrouserRouter
    return (
      <HashRouter>
        <div className='app-wrapper'>
          <HeaderComponent />
          <Nav />
          <div className='app-wrapper-content'>
            <Switch>
              <Route exact path='/'
                render={() => <Suspense fallback={<div>Загрузка...</div>}>
                  <Redirect to={'/profile'} />
                </Suspense>}
              />
              <Route
                path='/dialogs'
                render={() => <Suspense fallback={<div>Загрузка...</div>}>
                  <DialogsContainer />
                </Suspense>}
              />
              <Route path='/profile/:userId?'
                render={() => <Suspense fallback={<div>Загрузка...</div>}>
                  <ProfileContainer />
                </Suspense>}
              />
              <Route path='/users'
                render={() => <UsersContainer pageTitle={'All users'}
                />}
              />
              <Route path='/login'
                render={() => <Login
                />}
              />
              <Route path='/photos' component={Photos} />
              <Route path='/music' component={Music} />
              <Route path='/settings' component={Settings} />
              <Route path='*'
                render={() => <div>404 NOT FOUND</div>}
              />
            </Switch>
          </div>
          <Sidebar/>
          <Footer/>
        </div>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);
