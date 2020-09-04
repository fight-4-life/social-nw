import React from 'react';
import styles from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/user.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get
        (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)

        })
    }

    onPageChange(currentPage) {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
    })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for(let i=1; i <= 20; i++){
            pages.push(i)
        } 
        return (<div>
            <div>
                {pages.map(page =>
        <span className={this.props.currentPage === page && styles.selectedPage}
        onClick={() => {this.onPageChange(page)}}>{page}</span>
                  )
               }
           </div>
            {this.props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div >
                            <img className={styles.userPic} src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>followed</button>
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
}

export default Users;