import React, {useEffect} from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/mrrobot.png'
import {NavLink} from 'react-router-dom';
import Pagination from './Pagination';
import {UsersType} from '../../types/types';
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/userSelectors";
import {follow, requestUsers, unfollow} from "../../redux/usersReducer";

type PropsType = {}

const Users: React.FC<PropsType> = React.memo((props) => {

    const pageSize = useSelector(getPageSize)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const users: Array<UsersType> = useSelector(getUsers)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()

    useEffect(
        () => {
            dispatch(requestUsers(currentPage, pageSize))
        }, []
    )

    const onPageChange = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize))
    }
    const followUser = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollowUser = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return (<div className={styles.usersPage}>
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