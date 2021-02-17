import React from 'react';
import c from './onefriend.module.css';
import avatar from '../../../../assets/images/avatar.jpg';
import { NavLink } from 'react-router-dom';
//import { friendsAPI } from '../../../../API/api';

const Onefriend = (props) => {

    let to_follow = () => {
        let index = props.id;
        props.followFriend(index);
    }

    let to_unfollow = () => {
        let index = props.id;
        props.unfollowFriend(index);
    }

    return(
        <div>
            <div className={c.one_friend}>
                <div className={c.person}>
                    <div className={c.avatar}>
                        <NavLink to={`/profile/${props.id}`} >
                            <img src={(props.photos.small === null) ? avatar : props.photos.small} alt="error" />
                        </NavLink>
                    </div>
                    <div className={c.name}>{props.name}</div>
                    {
                        (props.followed === false) ? <button className={c.follow} disabled={props.friendsFollowInProgress.some(id => id === props.id)} onClick={to_follow}> Follow </button> :
                        (props.followed === true) ? <button className={c.follow} disabled={props.friendsFollowInProgress.some(id => id === props.id)} onClick={to_unfollow}> Unfollow </button> :
                        <div></div>
                    }
                </div>
                {/* <div>{props.id}</div> */}
                {/*
                    <div className={c.last_message}> {props.last_message} </div>
                    <div className={c.online}>{props.online}</div>
                */}
            </div>
        </div>
    );
}

export default Onefriend;