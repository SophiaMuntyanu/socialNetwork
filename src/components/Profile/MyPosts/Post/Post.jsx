import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <h3>{props.name}</h3>
      <div>{props.message}</div>
      <div>like {props.likeCount}</div>
    </div>
  );
}

export default Post;