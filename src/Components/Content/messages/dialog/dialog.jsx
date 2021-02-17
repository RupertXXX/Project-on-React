import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './dialog.module.css';

const Dialog = (props) => {

    let way = "/messages/" + props.id;
    return(
        <div>
            <div className={c.dialog}><NavLink to={way}>{props.name}</NavLink></div>
        </div>
    );
}

export default Dialog;