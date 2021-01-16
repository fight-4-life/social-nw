import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import { required, maxLengthCreator } from '../../validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';
import { InitialStateType } from '../../redux/dialogsReducer';

type PropsType = {
    dialogsPage: InitialStateType
    sendMessageActionCreator: (messageText: string ) => void
}

type NewMessageFormType = {
    newMessageText: string
}

type NewMessageValuesKeysType = Extract<keyof NewMessageFormType, string>

const Dialogs: React.FC<PropsType> = (props) => {

  const state = props.dialogsPage;

  const dialogElements = state.dialogs.map(el => <DialogItem name={el.name} key={el.id} id={el.id} />);

  const messagesElements = state.messages.map(msg => <Message message={msg.message} key={msg.id} />);

  const addNewMessage = (values: NewMessageFormType) => {
    props.sendMessageActionCreator(values.newMessageText)
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

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormType, {}> & {}> =
    (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
          {/*{createField<NewMessageValuesKeysType>('Text your message' ,'newMessageText' ,[required, maxLength50], Textarea)}*/}
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


const AddMessageReduxForm = reduxForm<NewMessageFormType>({ form: 'dialogsMessageForm' })(AddMessageForm)

export default Dialogs;
