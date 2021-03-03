import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './header.module.css';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/images/search.svg';
import avatar from '../../assets/images/avatar.jpg';

const Header = (props) => {
    return (
        <header className={c.header}>
            <div className="wrapper">
                <div className={c.img_nav_search_inline}>
                    <nav>
                        <ul className={c.header_ul_nav}>
                            <li> <NavLink to='/profile' >Profile</NavLink> </li>
                            <li> <NavLink to='/messages' >Messages</NavLink> </li>
                            <li className={c.header_notification}> <NavLink to='/settings' >Notification</NavLink></li>
                        </ul>
                    </nav>
                    <img src={logo} alt="logo" className={c.header_logo} />
                    <input type="text" placeholder="Search" className={c.header_Search_place} />
                    <img src={search} alt="logo" className={c.header_search_icon} />
                    {props.isLogin === true ?
                        <NavLink to='/profile'>
                            <img src={ !props.profileInfo ? 
                                        avatar :
                                            props.profileInfo.photos.small ? 
                                            props.profileInfo.photos.small : 
                                                avatar} 
                                alt="logo" className={c.header_photo} />
                        </NavLink>
                    :
                        <div>
                            <NavLink to='/login' className={c.login} >Log in</NavLink>
                        </div>
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;