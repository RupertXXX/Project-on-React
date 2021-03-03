import React from 'react';
import c from './notFound.module.css';
import p404 from '../../assets/images/p404.png';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return <>
        <div className={c.main}>
            <img className={c.p404} src={p404} alt="404" />
            <NavLink className={c.link} to="/"> Go to main page </NavLink>
        </div>
    </>
}

export default NotFound;