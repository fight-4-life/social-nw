import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogElements = state.dialogs.map(el => <DialogItem name={el.name} key={el.id} id={el.id} />);

  let messagesElements = state.messages.map(msg => <Message message={msg.message} key={msg.id} />);

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText)
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
          <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
}
const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
          placeholder={'Text your message'}
          name={'newMessageText'}
          validate={[required, maxLength50]}
        />
      </div>
      <div><button className={styles.sendMessageButton}>Send message</button></div>
    </form>
  )
}


const AddMessageReduxForm = reduxForm({ form: 'dialogsMessageForm' })(AddMessageForm)

export default Dialogs;
