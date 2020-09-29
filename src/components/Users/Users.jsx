import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/user.png'
import { NavLink, Redirect } from 'react-router-dom';
import Pagination from './Pagination';



let Users = ({ currentPage, onPageChange, ...props }) => {

    return (<div>
        <Pagination
            currentPage={currentPage}
            onPageChange={onPageChange}
        />
        {props.users.map(u =>
            <div key={u.id}>
                <span>
                    <div >
                        <NavLink to={`/profile/${u.id}`}>
                            <img className={styles.userPic} src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>u.location.country</div>
                        <div>u.location.city</div>
                    </span>
                </span>
            </div>)}
    </div>
    )

}

export default Users;