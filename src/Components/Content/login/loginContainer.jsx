// import React from 'react';
import { connect } from 'react-redux';
import Login from './login';
import { authLoginThunkCreator, authLogoutThunkCreator, getCaptchaThunkCreator } from '../../../redux/reducers/authReducer';

let mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin,
        url: state.auth.urlCaptcha
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        authLogin: (email, password, rememberMe, captcha) => {
            dispatch(authLoginThunkCreator(email, password, rememberMe, captcha));
        },
        authLogout: () => {
            dispatch(authLogoutThunkCreator());
        },
        getCaptcha: () => {
            dispatch(getCaptchaThunkCreator())
        }
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;