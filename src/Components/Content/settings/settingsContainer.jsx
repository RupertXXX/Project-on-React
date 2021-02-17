import { connect } from 'react-redux';
import Settings from './settings';
import {authLogoutThunkCreator} from '../../../redux/reducers/authReducer';

const mstp = (state) => {
    return {
        a: 11
    };
}

const mdtp = (dispatch) => {
    return {
        logout: () => {
            dispatch(authLogoutThunkCreator());
        }
    }
}

const SettingsContainer = connect(mstp, mdtp)(Settings);
export default SettingsContainer;