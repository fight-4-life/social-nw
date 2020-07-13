import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

function Dialogs() {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsList}>
        <div className={styles.dialog + ' ' + styles.active}>
          <NavLink to='/dialogs/1'>
            Vavan
          </NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to='/dialogs/2'>
            Iren
          </NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to='/dialogs/3'>
            Bieven
          </NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to='/dialogs/4'>
            Kama
          </NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to='/dialogs/5'>
            Maga
          </NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to='/dialogs/6'>
            Lena
          </NavLink>
        </div>
      </div>
      <div className={styles.messagesList}>
        <div className="message">
          Hello moto
        </div>
        <div className="message">
          Chiferni-ka bratok
        </div>
        <div className="message">
          Feel good
        </div>
        <div className="message">
          Ok alright
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
