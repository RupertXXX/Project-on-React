import React from 'react';
import {NavLink} from 'react-router-dom';
import ProfileStatusFunc from './status/status';
import Loading from '../../../../common/loading/loading';
import avatar from '../../../../assets/images/avatar.jpg';
import yes from '../../../../assets/images/yes.svg';
import no from '../../../../assets/images/no.svg';
import c from './info.module.css';

const Info = (props) => {

    if(!props.profileInfo){
        return <Loading />
    }
    else{
        const avatar_img = {
            backgroundImage: `url(${props.profileInfo.photos.large === null ? avatar : props.profileInfo.photos.large})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
        }
        return (
            <div className={c.first_screen}>
                <div style={avatar_img} alt="my_avatar" className={c.main_photo}></div>
                <div className={c.main_text}>
                    <div className={c.profile_name}> My name is: 
                        <span className={c.profile_name_is}> {props.profileInfo.fullName} </span>
                    </div>
                    <div className={c.line}></div>
                    <div className={c.aboutMe}> <ProfileStatusFunc isNotOwner={props.isNotOwner} setStatus={props.setStatus} value={props.value} /> </div>
                    <div className={c.contacts}>
                        <div className={c.contacts_title}>Contacts: </div>
                        {/* <div>{props.profileInfo.aboutMe}</div> */}
                        <div className={c.profile_status1}> facebook:
                            <span className={c.profile_status1_is}> {props.profileInfo.contacts.facebook} </span>
                        </div>
                        <div className={c.profile_status2}> vkontakte:
                            <span className={c.profile_status2_is}> {props.profileInfo.contacts.vk} </span>
                        </div>
                        <div className={c.profile_status3}> twitter:
                            <span className={c.profile_status3_is}> {props.profileInfo.contacts.twitter} </span>
                        </div>
                        <div className={c.profile_status3}> instagram:
                            <span className={c.profile_status3_is}> {props.profileInfo.contacts.instagram} </span>
                        </div>
                        <div className={c.profile_status3}> github:
                            <span className={c.profile_status3_is}> {props.profileInfo.contacts.github} </span>
                        </div>
                    </div>
                    <div className={c.loofingforajob}>
                        <div className={c.loofingforajob_flex}>
                            <div> Looking for a job: </div><img alt="this_yes_or_no" src={props.profileInfo.lookingForAJob ? yes : no} />
                        </div>
                        <div> Looking for a job description: {props.profileInfo.lookingForAJobDescription} </div>
                    </div>
                    <NavLink to="/settings#costomize" className={c.costomize}>Costomize profile</NavLink>
                </div> 
            </div>
        );
    }
}

export default Info;