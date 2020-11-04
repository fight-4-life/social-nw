import React, {Suspense} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Photos from './components/Photos/Photos';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {HashRouter, Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderComponent from './components/Header/HeaderComponent';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {initializeApp} from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sideber';
import 'antd/dist/antd.css';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';


import {Layout, Menu, Breadcrumb} from 'antd';
// import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
// import styles from "./components/Nav/Nav.module.css";

// const {SubMenu} = Menu;
// const {Header, Content, Footer, Sider} = Layout;
//
// const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
// const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    componentWillUnmount() {
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
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

            // <HashRouter>
            //   <Layout>
            //     <Header className="header">
            //       <div className="logo"/>
            //       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            //         <Menu.Item key="1">
            //           <Link to='/users'>Users</Link>
            //         </Menu.Item>
            //       </Menu>
            //     </Header>
            //     <Content style={{padding: '0 50px'}}>
            //       <Breadcrumb style={{margin: '16px 0'}}>
            //         <Breadcrumb.Item>Home</Breadcrumb.Item>
            //         <Breadcrumb.Item>List</Breadcrumb.Item>
            //         <Breadcrumb.Item>Pet project</Breadcrumb.Item>
            //       </Breadcrumb>
            //       <Layout className="site-layout-background" style={{padding: '24px 0'}}>
            //         <Sider className="site-layout-background" width={200}>
            //           <Menu
            //               mode="inline"
            //               // defaultSelectedKeys={['1']}
            //               defaultOpenKeys={['sub1']}
            //               style={{height: '100%'}}
            //           >
            //             <SubMenu key="sub1" icon={<UserOutlined/>} title="My profile">
            //               <Menu.Item key="1">
            //                 <Link to='/profile'>Profile</Link>
            //               </Menu.Item>
            //               <Menu.Item key="2">
            //                 <Link to='/users'>Users</Link>
            //               </Menu.Item>
            //               <Menu.Item key="3">
            //                 <Link to='/dialogs'>Messages</Link>
            //
            //               </Menu.Item>
            //               <Menu.Item key="4">option4</Menu.Item>
            //             </SubMenu>
            //             <SubMenu key="sub2" icon={<LaptopOutlined/>} title="subnav 2">
            //               <Menu.Item key="5">option5</Menu.Item>
            //               <Menu.Item key="6">option6</Menu.Item>
            //               <Menu.Item key="7">option7</Menu.Item>
            //               <Menu.Item key="8">option8</Menu.Item>
            //             </SubMenu>
            //             <SubMenu key="sub3" icon={<NotificationOutlined/>} title="subnav 3">
            //               <Menu.Item key="9">option9</Menu.Item>
            //               <Menu.Item key="10">option10</Menu.Item>
            //               <Menu.Item key="11">option11</Menu.Item>
            //               <Menu.Item key="12">option12</Menu.Item>
            //             </SubMenu>
            //           </Menu>
            //         </Sider>
            //         <Content style={{padding: '0 24px', minHeight: 280}}>
            //           <Switch>
            //             <Route exact path='/'
            //                    render={() => <Suspense fallback={<div>Загрузка...</div>}>
            //                      <Redirect to={'/profile'}/>
            //                    </Suspense>}
            //             />
            //             <Route
            //                 path='/dialogs'
            //                 render={() => <Suspense fallback={<div>Загрузка...</div>}>
            //                   <DialogsContainer/>
            //                 </Suspense>}
            //             />
            //             <Route path='/profile/:userId?'
            //                    render={() => <Suspense fallback={<div>Загрузка...</div>}>
            //                      <ProfileContainer/>
            //                    </Suspense>}
            //             />
            //             <Route path='/users'
            //                    render={() => <UsersContainer pageTitle={'All users'}
            //                    />}
            //             />
            //             <Route path='/login'
            //                    render={() => <Login
            //                    />}
            //             />
            //             <Route path='/photos' component={Photos}/>
            //             <Route path='/music' component={Music}/>
            //             <Route path='/settings' component={Settings}/>
            //             <Route path='*'
            //                    render={() => <div>404 NOT FOUND</div>}
            //             />
            //           </Switch>
            //         </Content>
            //       </Layout>
            //     </Content>
            //     <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            //   </Layout>
            // </HashRouter>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
