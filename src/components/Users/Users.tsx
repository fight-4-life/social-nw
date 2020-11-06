import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/mrrobot.png'
import { NavLink } from 'react-router-dom';
import Pagination from './Pagination';
import { UsersType } from '../../types/types';
import {Button} from "antd";

type PropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
    users: Array<UsersType>
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const Users: React.FC<PropsType> = ({ currentPage, onPageChange, totalUsersCount, pageSize, users, ...props }) => {

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
                    <div >
                        <NavLink to={`/profile/${u.id}`}>
                            <img className={styles.userPic} alt={'small userpic'} src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {// @ts-ignore
                            u.followed
                            ? <Button type={"primary"} size={'small'} danger
                                      //className={styles.unfollowButton}
                                      disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>unfollow</Button>

                            : <Button type={"primary"} size={'small'}
                                      //className={styles.followButton}
                                      disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
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

}

export default Users;