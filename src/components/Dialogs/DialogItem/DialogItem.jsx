import React from 'react';
import classes from './DialogItem.module.css';
import './DialogItem.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/Dialogs/" + props.id;
  return (
    <div className="dialog nav-item">
      <NavLink className={props.class} to={path}>{props.name}</NavLink>
    </div>
  );
}

export default DialogItem;