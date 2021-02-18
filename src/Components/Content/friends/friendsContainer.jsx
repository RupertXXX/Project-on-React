import React from 'react';
import { connect } from 'react-redux';
import {followCreator, 
        unfollowCreator, 
        selectPageCreator, 
        getUsersThunkCreator,
        getFriendsThunkCreator, 
        followThunkCreator, 
        unfollowThunkCreator, } from '../../../redux/reducers/friendsReducer';
import {getUsersComplecated,
        getFriends,
        getPageSize,
        getTotalFriendsCount,
        getCurrentPage,
        getIsFetching,
        getFriendsFollowInProgress, } from '../../../redux/selectors/friendsSelector';
import FriendsFunc from './friendsFunc';
import Loading from '../../../common/loading/loading';

class FriendsContainerAPI extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        this.props.getFriends();
    }
    newRequestOnClick = (obj) => {
        this.props.selectPage(obj);
        this.props.getUsers(obj, this.props.pageSize);
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Loading /> : null}
                <FriendsFunc {...this.props} newRequestOnClick={this.newRequestOnClick} />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        friendsAllUsers: getUsersComplecated(state),
        friends: getFriends(state),
        pageSize: getPageSize(state),
        totalFriendsCount: getTotalFriendsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        friendsFollowInProgress: getFriendsFollowInProgress(state),
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        to_follow: (index) => {
            dispatch(followCreator(index));
        },
        to_unfollow: (index) => {
            dispatch(unfollowCreator(index));
        },
        selectPage: (newcurrent) => {
            dispatch(selectPageCreator(newcurrent));
        },
        getUsers: (currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize));
        },
        getFriends: () => {
            dispatch(getFriendsThunkCreator());
        },
        followFriend: (index) => {
            dispatch(followThunkCreator(index))
        },
        unfollowFriend: (index) => {
            dispatch(unfollowThunkCreator(index))
        },
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsContainerAPI);

export default FriendsContainer;