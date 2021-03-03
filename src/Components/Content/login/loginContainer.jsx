import React from 'react';
import { connect } from 'react-redux';
import { authLoginThunkCreator, authLogoutThunkCreator, getCaptchaThunkCreator } from '../../../redux/reducers/authReducer';
import { compose } from 'redux';
import withSuspense from '../../HOCs/suspenseHoc';
import withErrorBoundary from '../../HOCs/errorBoundaryHoc';
const Login = React.lazy(() => import('./login'));

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

export default compose( withSuspense,
                        withErrorBoundary,
                        connect(mapStateToProps, mapDispatchToProps),
                        )(Login);