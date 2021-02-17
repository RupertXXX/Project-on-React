import React, { useEffect, useState } from 'react';
import c from './status.module.css';

const ProfileStatusFunc = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [valueRightNow, setValueRightNow] = useState(props.value);

    const deactivateEditMode = () => {
        setEditMode(false);
        props.setStatus(valueRightNow);
    }

    const activateEditMode = () => {
        setEditMode(true);
    }
    
    const changeStatus = (e) => {
        setValueRightNow(e.target.value);
    }

    useEffect(
        setValueRightNow(props.value)
    , [props.value]);

    return(<>
        <div className={c.main} >
            <div className={c.about} > About me: </div>
            {
                (props.isNotOwner)
                ?
                    <div className={c.status}>
                        <span className={c.status_is} > {props.value} </span>
                    </div>
                :
                    (editMode) ? 
                        <div>
                            <input onBlur={deactivateEditMode} onChange={changeStatus} className={c.input_status} type="text" autoFocus={true} value={valueRightNow} />
                        </div>
                    :
                        <div className={c.status} onClick={activateEditMode} >
                            <span className={c.status_is} > {props.value} </span>
                        </div>
            }
        </div>
    </>);
}

export default ProfileStatusFunc;