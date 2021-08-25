import React from 'react';
import classes from './Message.module.css';
import './Message.css';

const Message = (props) => {
  return (
    <div className={props.class}> {props.message} </div>
  );
}

export default Message;