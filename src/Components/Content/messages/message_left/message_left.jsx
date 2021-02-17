import React from 'react';
import c from './message_left.module.css';

const MessageLeft = (props) => {
    return(
        <div className={c.message_is_left}>{props.message}</div>
    );
}

export default MessageLeft;