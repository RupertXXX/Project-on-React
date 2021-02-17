import React from 'react';
import Profile from './Profile';
import withLoginCheck from '../../HOCs/isLoginHoc';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {getProfileThunkCreator, getStatusThunkCreator, 
        setStatusThunkCreator } from '../../../redux/reducers/profileReducer';
import { compose } from 'redux';

class ProfileContainerAPI extends React.Component { 
    
    refreshProfile = () => {
        if (this.props.isLogin === true) {
            let userId = this.props.match.params.userId;
            if(!userId) {
                userId = this.props.id;
                if(!userId) this.props.history.push("/login");
            }
            this.props.getStatus(userId);
            this.props.getProfile(userId);
        }
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.userId !== this.props.match.params.userId) this.refreshProfile();
    }

    render() {
        return (
            <Profile {...this.props} isNotOwner={!!this.props.match.params.userId} />
        );
    }
}

let mapStateToProps = (state) => ({
    profileInfo: state.profilePage.profileInfo,
    isLogin: state.auth.isLogin,
    value: state.profilePage.status,
    id: state.auth.data.id,
})

let mapDispatchToProps = (dispatch) => {
    return {
        getProfile: (userId) => {
            dispatch(getProfileThunkCreator(userId))
        },
        getStatus: (userId) => {
            dispatch(getStatusThunkCreator(userId))
        },
        setStatus: (status) => {
            dispatch(setStatusThunkCreator(status))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withLoginCheck,)(ProfileContainerAPI);