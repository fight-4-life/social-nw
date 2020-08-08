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

let dialogsData = [
  {id: 1, name: 'Vavan'},
  {id: 2, name: 'Iren'},
  {id: 3, name: 'Bieven'},
  {id: 4, name: 'Kama'},
  {id: 5, name: 'Maga'},
  {id: 6, name: 'Konek'}
]

let messagesData = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'Chiferni-ka bratok'},
  {id: 3, message: 'Feel good'},
  {id: 4, message: 'Ok alright'}
]

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsList}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
      </div>
      <div className={styles.messagesList}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
      </div>
    </div>
  );
}

export default Dialogs;
