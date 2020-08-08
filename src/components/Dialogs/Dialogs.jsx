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

  let dialogs = [
    { id: 1, name: 'Vavan' },
    { id: 2, name: 'Iren' },
    { id: 3, name: 'Bieven' },
    { id: 4, name: 'Kama' },
    { id: 5, name: 'Maga' },
    { id: 6, name: 'Konek' }
  ];

  let dialogElements = dialogs.map(el => <DialogItem name={el.name} id={el.id} />);

  let messages = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'Chiferni-ka bratok' },
    { id: 3, message: 'Feel good' },
    { id: 4, message: 'Ok alright' }
  ];

  let messagesElements = messages.map(msg => <Message message={msg.message} />);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsList}>
        {dialogElements}
      </div>
      <div className={styles.messagesList}>
        {messagesElements}
      </div>
    </div>
  );
}

export default Dialogs;
