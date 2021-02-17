import { settingsAPI } from '../../API/api';
import { setUserProfileCreateAction } from './profileReducer';

const ADD_PHOTO = 'ADD_PHOTO';

let initialState = {
    newPhoto: "",

};

const settingsReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_PHOTO:
            return {
                ...state,
                newPhoto: action.newPhoto,
            }
        default: return state;
    }
}

const addPostCreateAction = (newPhoto) => ({type: 'ADD_PHOTO', newPhoto});

export const setPhotoThunkCreator = (photo) => async (dispatch) => {
    let data = await settingsAPI.setPhoto(photo);

    if(data.resultCode === 0) {
        dispatch(addPostCreateAction(data.small));
    };
}

export const setProfileInfoThunkCreator = (allData) => async (dispatch) => {
    let data = await settingsAPI.setProfileInfo(allData);
    if(data.resultCode === 0) dispatch(setUserProfileCreateAction(allData));
}

export default settingsReducer;