import React from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from "../redux/reduxStore";

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
  })

type MapPropsTypes = {
    isAuth: boolean
}

export function withAuthRedirect<WCP> (WrappedComponent: React.ComponentType<WCP>) {
    const RedirectComponent: React.FC<MapPropsTypes & {}> = (props) => {
        const {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>
        return <WrappedComponent {...restProps as WCP} />
    }

    return connect<MapPropsTypes, {}, WCP, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent)
}