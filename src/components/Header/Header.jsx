import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header className={styles.header}>
            <img src='https://www.causevox.com/wp-content/uploads/2011/05/logo-finished.png ' />
            <div className={styles.login}>
            {props.isAuth ? props.login :
            <NavLink to={'/login'}>
                LOGIN
            </NavLink>} 
              </div>
            
        </header>
    );
}

export default Header;