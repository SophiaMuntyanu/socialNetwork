import React from 'react';
import classes from'./App.module.css';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="wrapper-container">
          <Route path="/Dialogs" render={ () => <Dialogs store={props.store} /> } />
          <Route path="/Profile" render={ () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} /> } />
          <Route path="/News" render={ () => <News /> } />
          <Route path="/Music" render={ () => <Music /> } />
          <Route path="/Settings" render={ () => <Settings /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
