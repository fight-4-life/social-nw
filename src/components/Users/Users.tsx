import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useHistory} from 'react-router-dom';
import {UsersType} from '../../types/types';
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../redux/userSelectors";

import Pagination from './Pagination';
import {FilterType, follow, requestUsers, unfollow} from "../../redux/usersReducer";
import {UsersSearchForm} from "./UsersSearchForm";

import userPhoto from '../../assets/mrrobot.png'
import {Button} from "antd";
import styles from './Users.module.css'
import * as queryString from "querystring";

type PropsType = {}
type QueryParamsType = { term?: string; page?: string; friend?: string }

const Users: React.FC<PropsType> = React.memo((props) => {

    const pageSize = useSelector(getPageSize)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const users: Array<UsersType> = useSelector(getUsers)
    const followingInProgress = useSelector(getFollowingInProgress)
    const filter = useSelector(getUsersFilter)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(
        () => {
            const parsed = queryString.parse(history.location.search.substr(1)) as { term: string, page: string, friend: string }

            let actualPage = currentPage
            let actualFilter = filter

            if (!!parsed.page) actualPage = Number(parsed.page)
            if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term}

            switch (parsed.friend) {
                case "null":
                    actualFilter = {...actualFilter, friend: null}
                    break;
                case "true":
                    actualFilter = {...actualFilter, friend: true}
                    break;
                case "false":
                    actualFilter = {...actualFilter, friend: false}
                    break;
            }

            dispatch(requestUsers(actualPage, pageSize, actualFilter))
        }, []
    )

    useEffect(() => {
        const query: QueryParamsType = {}

        if (filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])


    const onPageChange = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const followUser = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollowUser = (userId: number) => {
        dispatch(unfollow(userId))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }

    return (<div className={styles.usersPage}>

            <UsersSearchForm onFilterChanged={onFilterChanged}/>

            <Pagination
                currentPage={currentPage}
                onPageChange={onPageChange}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            {users.map(u =>
                <div className={styles.userInList} key={u.id}>
                <span>
                    <div className={styles.userName}>{u.name}</div>
                    <span>
                        <div>Country: </div>
                        <div>City: </div>
                        {/* <div>u.location.country</div>
                        <div>u.location.city</div>  */}
                    </span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                            <img className={styles.userPic} alt={'small userpic'}
                                 src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {// @ts-ignore
                            u.followed
                                ? <Button type={"primary"} size={'small'} danger
                                          disabled={followingInProgress.some((id: number) => id === u.id)}
                                          onClick={() => {
                                              unfollowUser(u.id)
                                          }}>unfollow</Button>

                                : <Button type={"primary"} size={'small'}
                                          disabled={followingInProgress.some((id: number) => id === u.id)}
                                          onClick={() => {
                                              followUser(u.id)
                                          }}>follow <b> {u.name}</b></Button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.status}</div>
                    </span>
                </span>
                </div>)}
        </div>
    )
})

export default Users;