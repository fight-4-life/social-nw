import React from 'react';
import styles from './Header.module.css';
import { NavLink, Redirect } from 'react-router-dom';
import logo from '../../assets/eye.png'

function Header(props) {
    return (
        <header className={styles.header}>
            <img src={logo} alt={'logo'} />
            <div className={styles.login}>
                {props.isAuth
                    ? <div> {props.login} <button className={styles.logoutButton}
                        onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>
                        L O G I N
                        <Redirect to={'/login'} />
                    </NavLink>}
            </div>

        </header>
    );
}

export default Header;