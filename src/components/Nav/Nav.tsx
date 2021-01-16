import React from 'react';
import styles from './Nav.module.css';
import {NavLink} from 'react-router-dom';

const Nav: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.item}>
                    <NavLink activeClassName={styles.activeLink} to='/profile'>Profile</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink activeClassName={styles.activeLink} to='/dialogs'>Messages</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink activeClassName={styles.activeLink} to='/users'>Users</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink activeClassName={styles.activeLink} to='/photos'>Photos</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink activeClassName={styles.activeLink} to='/music'>Music</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink activeClassName={styles.activeLink} to='/settings'>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;