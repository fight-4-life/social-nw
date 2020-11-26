import React from 'react';
import {useSelector} from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader'

import {getIsFetching} from '../../redux/userSelectors';


type UsersPagePropsType = {
    pageTitle: string
}

export const UsersContainer: React.FC<UsersPagePropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)

    return <>
        <h2>{props.pageTitle}</h2>
        {isFetching ? <Preloader/> : null}
        <Users/>
    </>
}
