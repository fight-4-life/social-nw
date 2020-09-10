import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogElements = state.dialogs.map(el => <DialogItem name={el.name} key={el.id} id={el.id} />);

  let messagesElements = state.messages.map(msg => <Message message={msg.message} key={msg.id} />);

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    props.sendMessage();
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.onMessageChange(text);
  }


  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsList}>
        <h3>Dialogs</h3>

        {dialogElements}
      </div>

      <div>

        <div className={styles.messagesList}>
          <h3>Messages</h3>
          {messagesElements}
          <textarea
            placeholder='Enter your text'
            ref={newMessageElement}
            onChange={onMessageChange}
            value={props.newMessageText}>
          </textarea>
          <div><button onClick={sendMessage}>Send</button></div>
        </div>

      </div>
    </div>
  );
}

export default Dialogs;
