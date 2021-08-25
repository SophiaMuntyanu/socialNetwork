import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  let postsElements = props.posts.map( p => <Post id={p.id} name={p.name} message={p.message} likeCount={p.likeCount} className={classes.postText}/>);
  
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} className={classes.textarea}/>
        </div>
        <div>
          <button onClick={addPost} type="button" className={classes.button}>Add post</button>
        </div>
        <div>
          <button type="button" className={classes.button}>Remove</button>
        </div>
      </div>
      <div className={classes.posts}>
        { postsElements }
      </div> 
    </div>
  );
}

export default MyPosts;