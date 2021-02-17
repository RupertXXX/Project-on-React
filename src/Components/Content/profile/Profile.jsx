import React from 'react';
import Info from './info/info';
import MyPostsContainer from './MyPosts/myPostsContainer';

const Profile = (props) => {
    return (
        <div>
            <Info id={props.id} profileInfo={props.profileInfo} setStatus={props.setStatus} 
                value={props.value} isNotOwner={props.isNotOwner} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;