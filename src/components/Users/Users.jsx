import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/user.png'
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    }
    return (<div>
        <div>
            {pages.map(page =>
                <span className={props.currentPage === page && styles.selectedPage}
                    onClick={() => { props.onPageChange(page) }}>{page}</span>
            )
            }
        </div>
        {props.users.map(u =>
            <div key={u.id}>
                <span>
                    <div >
                        <NavLink to={`/profile/${u.id }`}>
                            <img className={styles.userPic} src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>followed</button>
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