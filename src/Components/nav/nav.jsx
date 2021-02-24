import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './nav.module.css';

const Nav = () => {
    return (
        <nav className={c.nav}>
            <ul>
                <li> <NavLink to="/profile" activeClassName={c.active}>Profile</NavLink> </li>
                <li> <NavLink to="/messages" activeClassName={c.active}>Messages</NavLink> </li>
                <li> <NavLink to="/users" activeClassName={c.active}>Users</NavLink> </li>
                {/* <li> <NavLink to="/my_friends" activeClassName={c.active}>Friends</NavLink> </li> */}
                <li> <NavLink to="/news" activeClassName={c.active}>News</NavLink> </li>
                <li> <NavLink to="/games" activeClassName={c.active}>Games</NavLink> </li>
                <li> <NavLink to="/photos" activeClassName={c.active}>Photos</NavLink> </li>
                <li className={c.nav_settings}> <NavLink to="/settings" activeClassName={c.active}>Settings</NavLink> </li>
            </ul>
        </nav>
    );
}

export default Nav;