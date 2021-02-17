import { profileAPI } from '../../API/api';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    profileInfo: null,
    status: "Create status",
    profilePostsData: [
        {number:"1", message:"Profile! It's my first post! I'm really so happy to do it", id: 1},
        {number:"2", message:"Profile! It's my second post. Do this post it's OK", id: 2},
        {number:"3", message:"Profile! It's my thirth post. It's becoming boring.", id: 3},
        {number:"4", message:"Profile! It's time to stop!", id: 4},
    ],
};

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST: 
            let newPost = {
                number: "0",
                message: action.newText,
                id: 0
            };
    
            let lastNumber = state.profilePostsData[state.profilePostsData.length - 1].number;
            lastNumber = Number (lastNumber);
            let lastId = state.profilePostsData[state.profilePostsData.length - 1].id;
    
            let newNumber = lastNumber + 1;
            newNumber = String(newNumber);
            newPost.number = newNumber;
            let newId = lastId + 1;
            newPost.id = newId;

            return {
                ...state,
                profilePostsData: [...state.profilePostsData, newPost],
            }
        case SET_USER_PROFILE:
            return{
                ...state,
                profileInfo: action.profile,
            }
        case SET_USER_STATUS:
            return{
                ...state,
                status: action.status,
            }
        default: return state;
    }
}

export const addPostCreateAction = (newText) => ({type: 'ADD_POST', newText});
export const setUserProfileCreateAction = (profile) => ({type: 'SET_USER_PROFILE', profile});

const setUserStatusCreateAction = (status) => ({type: 'SET_USER_STATUS', status});

export const getProfileThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfileCreateAction(data));
        });
    }
}
export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setUserStatusCreateAction(data));
        });
    }
}
export const setStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.setStatus(status).then(response => {
            if(response.data.resultCode === 0) dispatch(setUserStatusCreateAction(status));
        });
    }
}

export default profileReducer;