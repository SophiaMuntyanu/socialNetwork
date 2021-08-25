const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
  switch(action.type) {
    case ADD_POST: 
      let newPost = {
        id: 15,
        name: 'Klaus',
        message: state.newPostText,
        likeCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = '';//очищаем строку
      return state;// вместо break
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText; 
      return state;
    default: 
    return state;
  } 
};

//action creators
export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;