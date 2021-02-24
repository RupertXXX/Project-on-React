import { connect } from 'react-redux';
import Settings from './settings';
import {authLogoutThunkCreator} from '../../../redux/reducers/authReducer';
import { compose } from 'redux';
import withLoginCheck from '../../HOCs/isLoginHoc';

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

export default compose(
    connect(mstp, mdtp),
    withLoginCheck,)
    (Settings);