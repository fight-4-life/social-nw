import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return <div className={styles.dialog + ' ' + styles.active}>
    <NavLink to={'/dialogs/' + props.id}> {props.name}  </NavLink>
  </div>

}

const Message = (props) => {
  return <div className="message">
  {props.message}
</div>
}

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsList}>
        <DialogItem name='Vavan' id='1' />
        <DialogItem name='Iren' id='2' />
        <DialogItem name='Biven' id='3' />
        <DialogItem name='Kama' id='4' />
        <DialogItem name='Maga' id='5' />
        <DialogItem name='Konek' id='6' />
      </div>
      <div className={styles.messagesList}>
        <Message message='Hello moto' />
        <Message message='Chiferni-ka bratok' />
        <Message message='Feel good' />
        <Message message='Ok alright' />
      </div>
    </div>
  );
}

export default Dialogs;
