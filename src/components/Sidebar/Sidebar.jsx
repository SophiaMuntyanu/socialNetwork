import React from 'react';
import classes from './Sidebar.module.css';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
      <sidebar className="sidebar bg-light d-flex flex-column flex-shrink-0 p-3 text-white">
          <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <NavLink to="/Profile" className="nav-link" aria-current="page">
                    Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Dialogs" className="nav-link" aria-current="page">
                    Messages
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/News" className="nav-link" aria-current="page">
                    News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Music" className="nav-link" aria-current="page">
                    Music
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Settings" className="nav-link" aria-current="page">
                    Settings
                </NavLink>
              </li>
          </ul>
      </sidebar>
    );
}

export default Sidebar;