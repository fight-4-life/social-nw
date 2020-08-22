import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

  let dialogElements = props.state.dialogsPage.dialogs.map(el => <DialogItem name={el.name} id={el.id} />);

  let messagesElements = props.state.dialogsPage.messages.map(msg => <Message message={msg.message} />);

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    // let messageText = newMessageElement.current.value;
    props.dispatch({type: 'ADD-MESSAGE'});
  }

  let onMessageChange = () => {
    let newMsgText = newMessageElement.current.value;
    props.dispatch({type: 'UPDATE-MESSAGE-TEXT',  newMsgText});
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
          <textarea ref={newMessageElement}
          onChange={onMessageChange} 
          value={props.state.dialogsPage.newMessageText}></textarea>
          <div><button onClick={sendMessage}>Send</button></div>
        </div>

      </div>
    </div>
  );
}

export default Dialogs;
