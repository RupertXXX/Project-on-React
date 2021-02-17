import React from 'react';
import { connect } from 'react-redux';
import {followCreator, 
        unfollowCreator, 
        selectPageCreator, 
        getFriendsThunkCreator, 
        followThunkCreator, 
        unfollowThunkCreator, } from '../../../redux/reducers/friendsReducer';
import {getFriendsComplecated,
        getPageSize,
        getTotalFriendsCount,
        getCurrentPage,
        getIsFetching,
        getFriendsFollowInProgress, } from '../../../redux/selectors/friendsSelector';
import FriendsFunc from './friendsFunc';
import Loading from '../../../common/loading/loading';

class FriendsContainerAPI extends React.Component {

    componentDidMount() {
        this.props.getFriends(this.props.currentPage, this.props.pageSize);
    }
    newRequestOnClick = (obj) => {
        this.props.selectPage(obj);
        this.props.getFriends(obj, this.props.pageSize);
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
        friends_onefriend: getFriendsComplecated(state),
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
        getFriends: (currentPage, pageSize) => {
            dispatch(getFriendsThunkCreator(currentPage, pageSize));
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