import React from 'react';
import Post from './Post/post';
// import c from './news.module.css';

const News = (props) => {

    let newsPostsData_is = props.news_post.map (obj => <Post number={obj.number} message={obj.message} key={obj.id} /> );

    return (
        <div>
            {newsPostsData_is}
        </div>
    );
}

export default News;