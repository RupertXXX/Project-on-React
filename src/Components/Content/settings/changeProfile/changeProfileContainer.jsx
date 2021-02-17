import React from 'react';
import { connect } from "react-redux";
import { setPhotoThunkCreator, setProfileInfoThunkCreator } from "../../../../redux/reducers/settingsReducer";
import { getProfileThunkCreator } from "../../../../redux/reducers/profileReducer";
import ChangeProfile from "./changeProfile";
import { compose } from "redux";
import withLoginCheck from "../../../HOCs/isLoginHoc";

class ChangeProfileApi extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.id);
    }

    render() {
        return <ChangeProfile info={this.props.info} setPhoto={this.props.setPhoto}
                setProfileInfo={this.props.setProfileInfo}  />
    }
}

const mstp = (state) => {
    return {
        info: state.profilePage.profileInfo,
        id: state.auth.data.id,
    }
}

const mdtp = (dispatch) => {
    return {
        setPhoto: (photo) => {
            dispatch(setPhotoThunkCreator(photo));
        },
        setProfileInfo: (allData) => {
            dispatch(setProfileInfoThunkCreator(allData));
        },
        getProfile: (userId) => {
            dispatch(getProfileThunkCreator(userId))
        },
    }
}

export default compose(
    connect(mstp, mdtp),
    withLoginCheck,)(ChangeProfileApi);