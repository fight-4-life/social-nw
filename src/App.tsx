import React, {Suspense} from 'react';
import {connect} from 'react-redux';
import Nav from './components/Nav/Nav';
import Photos from './components/Photos/Photos';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import {UsersContainer} from './components/Users/UsersContainer';
import HeaderComponent from './components/Header/HeaderComponent';
import {Login} from './components/Login/Login';
import {initializeApp} from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sideber';
import {page404} from "./components/common/404/page404";
import {AppStateType} from "./redux/reduxStore";
import 'antd/dist/antd.css';
import './App.css';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const ChatPage = React.lazy(() => import('./Pages/Chat/ChatPage'))

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    componentWillUnmount() {
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        // HashRouter used for gh pages. Please use BrowserRouter
        return (
            <HashRouter>
                <div className='app-wrapper'>
                    <HeaderComponent/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Switch>
                            <Route exact path='/'
                                   render={() => <Suspense fallback={<div>Загрузка...</div>}>
                                       <Redirect to={'/profile'}/>
                                   </Suspense>}
                            />
                            <Route
                                path='/dialogs'
                                render={() => <Suspense fallback={<div>Загрузка...</div>}>
                                    <DialogsContainer/>
                                </Suspense>}
                            />
                            <Route path='/profile/:userId?'
                                   render={() => <Suspense fallback={<div>Загрузка...</div>}>
                                       <ProfileContainer/>
                                   </Suspense>}
                            />
                            <Route path='/users'
                                   render={() => <UsersContainer pageTitle={'Devs'}
                                   />}
                            />
                            <Route path='/login'
                                   render={() => <Login
                                   />}
                            />
                            <Route
                                path='/chat'
                                render={() => <Suspense fallback={<div>Загрузка...</div>}>
                                    <ChatPage/>
                                </Suspense>}
                            />
                            <Route path='/photos' component={Photos}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/settings' component={Settings}/>
                            <Route path='*' component={page404}/>
                        </Switch>
                    </div>
                    <Sidebar/>
                    <Footer/>
                </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
