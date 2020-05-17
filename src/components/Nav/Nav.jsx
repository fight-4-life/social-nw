import React from 'react';
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.item}><a>Profile</a></li>
        <li className={styles.item}><a>Messages</a></li>
        <li className={styles.item}><a>Photos</a></li>
        <li className={styles.item}><a>Music</a></li>
        <li className={styles.item}><a>Settings</a></li>
      </ul>
    </nav>
  );
}

export default Nav;