import React from 'react';
import c from './post.module.css';

const Post = (props) => {
    return (
        <div className={c.wrapper}>
            <div className={c.main_post}>
                <div className={c.title}> Post number {props.number}</div>
                <div className={c.video}></div>
                <div className={c.photos}>
                    <div className={c.first}><img className={c.photo_1} src="" alt="photo1"/></div> 
                    <div className={c.other}>
                        <img className={c.photo_2} src="" alt="photo2"/>
                        <img className={c.photo_3} src="" alt="photo3"/>
                    </div> 
                </div>
                <div className={c.text}> {props.message} </div>
            </div>
        </div>
    );
}

export default Post;