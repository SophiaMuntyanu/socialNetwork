import React from 'react';
import classes from './ProfileInfo.module.css';
import './ProfileInfo.css';
import picture from './1598867991-528.jpg';
import avatar from './avatar.jpg';

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.img__container}>
        <img className={classes.responsive} src={picture} />
      </div>
      <div className={classes.user}>
      <div className={classes.photo}>
        <img className={classes.responsive} src={avatar} />
      </div>
      <div className={classes.info}>
        <h2 className={classes.name}>София Мунтяну</h2>
        <p className={classes.description}>Люблю своих котов</p>
      </div>
      </div>
    </div>
  );
}

export default ProfileInfo;