import { authAPI } from '../../API/api'
import {stopSubmit} from 'redux-form';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_AUTH_USER_MESSAGES = 'SET_AUTH_USER_MESSAGES';
const CLEAR_AUTH_USER_DATA = 'CLEAR_AUTH_USER_DATA';
const LOGIN_IS = 'LOGIN_IS';
const LOGIN_IS_NOT = 'LOGIN_IS_NOT';
const SET_CAPTCHA = "SET_CAPTCHA"

let initialState = {
    isLogin: false,
    messages: [],
    data: {
      id: null,
      email: null,
      login: null,
    },
    urlCaptcha: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                data: action.data,
            }
        case SET_AUTH_USER_MESSAGES:
            return {
                ...state,
                messages: action.messages,
            }
        case CLEAR_AUTH_USER_DATA: 
            return {
                ...state,
                data: {
                    id: null,
                    email: null,
                    login: null
                },
                isLogin: false,
            }
        case LOGIN_IS:
            return {
                ...state,
                isLogin: true,
            }
        case LOGIN_IS_NOT:
            return {
                ...state,
                isLogin: false,
            }
        case SET_CAPTCHA:
            return {
                ...state,
                urlCaptcha: action.url,
            }
        default: return state;
    }
}

const setAuthUserDataCreateAction = (id, email, login) => ({ type: 'SET_AUTH_USER_DATA', data: {id, email, login} });
const setAuthUserMessagesCreateAction = (messages) => ({ type: 'SET_AUTH_USER_MESSAGES', messages });
const clearAuthUserDataCreateAction = () => ({type: 'CLEAR_AUTH_USER_DATA'})
const loginIsCreateAction = () => ({type: 'LOGIN_IS'});
const loginIsNotCreateAction = () => ({type: 'LOGIN_IS_NOT'});
const setCaptchaURL = (url) => ({type: "SET_CAPTCHA", url})

export const authMeThunkCreator = () => {
    return (dispatch) => {
        return authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserDataCreateAction(data.data.id, data.data.email, data.data.login));
                dispatch(loginIsCreateAction());
            }
            else {
                dispatch(setAuthUserMessagesCreateAction(data.messages));
                dispatch(loginIsNotCreateAction());
            }
        });
    }
}
export const authLoginThunkCreator = (email, password, rememberMe, captcha) => {
    return (dispatch) => {
        authAPI.authLogin(email, password, rememberMe, captcha).then(response => {
            if (response.data.resultCode === 0) dispatch(authMeThunkCreator());
            else if (response.data.resultCode === 10) dispatch(getCaptchaThunkCreator())
            else {
                let action = stopSubmit("login", {_error: response.data.messages[0] });
                dispatch(action);
            }
        });
    }
}
export const getCaptchaThunkCreator = () => {
    return (dispatch) => {
        authAPI.getCaptcha().then(response => {
            dispatch(setCaptchaURL(response.data.url));
        });
    }
}
export const authLogoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.authLogout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(clearAuthUserDataCreateAction());
            }
        });
    }
}

export default authReducer;