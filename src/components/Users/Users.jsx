import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/mrrobot.png'
import { NavLink } from 'react-router-dom';
import Pagination from './Pagination';

const Users = ({ currentPage, onPageChange, totalUsersCount, pageSize, ...props }) => {

    return (<div>
        <Pagination
            currentPage={currentPage}
            onPageChange={onPageChange}
            totalItemsCount={totalUsersCount}
            pageSize={pageSize}
        />
        {props.users.map(u =>
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
                        {u.followed
                            ? <button className={styles.unfollowButton} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>unfollow</button>

                            : <button className={styles.followButton} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>follow <b>{u.name}</b></button>
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