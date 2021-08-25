import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, name: 'Alice', message: 'Hello', likeCount:11,},
        {id: 2, name: 'Andrew', message: 'Hi!!', likeCount:12,},
        {id: 3, name: 'Sam', message: 'Hi, how are you?', likeCount:10,},
        {id: 3, name: 'Ann', message: 'Hi, it\'s my first post!', likeCount:11,},
      ],
      newPostText: "Ваш комментарий",
    },
    
    dialogsPage: {
      messages: [
        {id: 1, message: 'Hi',},
        {id: 2, message: 'Hi, how are you?',},
        {id: 3, message: 'Yeap, Deamon',},
      ],
      dialogs: [
        {id: 1, name: 'Dmitry',},
        {id: 2, name: 'Arthur',},
        {id: 3, name: 'Vlad',},
        {id: 4, name: 'Ann',},
        {id: 5, name: 'Alice',},
        {id: 6, name: 'Chris',},
      ],
      newMessageBody: "", 
    },
  
    sidebar: {
      
    },
  },
  _callSubscriber() {
    console.log('state is cgfhjklk');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);//прокидываем в редьюсер конкретно только то, что нам нужно
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
     
    this._callSubscriber(this._state);//перерисовываем все дерево
  }
};

export default store;
window.store = store;