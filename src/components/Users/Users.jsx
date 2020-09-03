import React from 'react';
import styles from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
    props.setUsers(
        [    { id: 1, photoUrl: 'https://i.imgflip.com/1fwa35.jpg', followed: false, fullName: 'Serega', status: 'hi bitches!', location: { country: 'Russia', city: 'Nyagan' } },
        { id: 2, photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/71B9d4sksiL._SL1500_.jpg', followed: true, fullName: 'Vovan', status: 'boss is hereee!', location: { country: 'Russia', city: 'Melborne' } },
        { id: 3, photoUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1149359631.jpg?crop=1.00xw:0.771xh;0,0.0262xh&resize=480:*', followed: false, fullName: 'Goga', status: 'smoke some weed!', location: { country: 'Russia', city: 'Spb' } },
        { id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQp7dfilXXGsAvAmLTgzMA8a7wEcu6gf6xzTw&usqp=CAU', followed: true, fullName: 'Andrew', status: 'awwwwwwwwww!', location: { country: 'Russia', city: 'Ekb' } }]
        )
    }

    return ( <div>
        
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div >
                            <img className={styles.userPic} src={u.photoUrl} />
                        </div>
                        <div>
                            {u.followed 
                            ?  <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                            :  <button onClick={() => { props.follow(u.id) }}>followed</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)}
    </div>
    )
}

export default Users;