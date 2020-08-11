import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

  let dialogElements = props.state.dialogsPage.dialogs.map(el => <DialogItem name={el.name} id={el.id} />);

  let messagesElements = props.state.dialogsPage.messages.map(msg => <Message message={msg.message} />);

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
