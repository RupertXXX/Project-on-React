import messagesReducer from './reducers/messagesReducer';
import profileReducer from './reducers/profileReducer';
import newsReducer from './reducers/newsReducer';
import friendsReducer from './reducers/friendsReducer';
import groupsReducer from './reducers/groupsReducer';
import authReducer from './reducers/authReducer';
import appReducer from './reducers/appReducer';
import settingsReducer from './reducers/settingsReducer';
import {reducer as formReducer} from 'redux-form'

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    newsPage: newsReducer,
    friendsPage: friendsReducer,
    groupsPage: groupsReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    settingsPage: settingsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;