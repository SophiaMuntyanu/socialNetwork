import React from 'react';
import classes from './Dialogs.module.css';
import './Dialogs.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';

const Dialogs = (props) => {
  
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} class="nav-link nav-link-font" /> );
  let messagesElements = state.messages.map( m => <Message class="message" message={m.message} /> );

  let newMessageBody = state.newMessageBody;

  //отвечает за отображение нового сообщения
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  //отвечает за ввод нового сообщения
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className="dialogs">
      <div className="dialog-items nav-item nav-pills">
        { dialogsElements }
      </div>
      <div className="messages">
        <div>{ messagesElements }</div>
        <div>
          <div>
            <textarea value={ newMessageBody } onChange={  onNewMessageChange } placeholder="Enter your message" className={classes.textarea}></textarea>
          </div>
          <div>
            <button onClick={ onSendMessageClick } className={classes.button}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;