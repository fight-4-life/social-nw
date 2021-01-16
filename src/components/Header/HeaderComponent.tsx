import React from 'react';
import Header, {PropsType} from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/authReducer';
import {AppStateType} from "../../redux/reduxStore";

class HeaderComponent extends React.Component<PropsType> {
    render() {
        return (
            <Header {...this.props} />
        );
    }
}

let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { logout })(HeaderComponent);