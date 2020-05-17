import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <img src='https://www.causevox.com/wp-content/uploads/2011/05/logo-finished.png ' />
        </header>
    );
}

export default Header;