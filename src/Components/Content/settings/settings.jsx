import React from 'react';
import Logout from './logout/logout';
import ChangeProfileContainer from './changeProfile/changeProfileContainer';

const Settings = (props) => {
    return <div>
        <ChangeProfileContainer />
        <Logout logout={props.logout} />
    </div>
}

export default Settings;