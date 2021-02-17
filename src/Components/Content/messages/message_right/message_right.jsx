import React from 'react';
import c from './message_right.module.css';

const MessageRight = (props) => {
    return(
        <div className={c.message_is_right}>{props.message}</div>
    );
}

export default MessageRight;