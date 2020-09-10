import React from 'react';
import { sendMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {

  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText
  }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },

    onMessageChange: (text) => {
      let action = onMessageChangeActionCreator(text);
      dispatch(action)
    }

  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;
