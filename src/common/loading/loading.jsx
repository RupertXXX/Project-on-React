import React from 'react';
import c from '../loading/loading.module.css';
import loading from '../../assets/images/loading.svg';

const Loading = (props) => {
    return(
        <>
            <div className={c.loading}>
                <img className={c.loading_svg} src={loading} alt="Loading..." />
            </div>
        </>
    );
}

export default Loading;