import React from 'react';
import c from './logout.module.css';

const Logout = (props) => {
    const logout = () => {
        props.logout();
    }

    return <div>
        <h1> Logout </h1>
        <button onClick={logout} className={c.logout}> Click to log out </button>
    </div> 
}
export default Logout;