import { friendsAPI } from '../../API/api'

const FOLLOW_ON_FRIENDS = 'FOLLOW_ON_FRIENDS';
const UNFOLLOW_ON_FRIENDS = 'UNFOLLOW_ON_FRIENDS';
const SET_USERS = 'SET_USERS';
const SET_FRIENDS = 'SET_FRIENDS';
const SELECT_PAGE = 'SELECT_PAGE';
const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT';
const FETCHING_IS = 'FETCHING_IS';
const FETCHING_IS_NOT = 'FETCHING_IS_NOT';
const FRIENDS_FOLLOW_IN_PROGRESS_TOGGLE = 'FRIENDS_FOLLOW_IN_PROGRESS_TOGGLE';

let initialState = {
    friendsAllUsersData: [],
    friendsData: [],
    pageSize: 15,
    totalFriendsCount: 0,
    totalFriendsCountServ: 0,
    currentPage: 1,
    isFetching: false,
    friendsFollowInProgress: [],
};

const friendsReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW_ON_FRIENDS: 
            return {
                ...state,
                friendsAllUsersData: state.friendsAllUsersData.map(u => {
                    if(u.id === action.index) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW_ON_FRIENDS:
            return {
                ...state,
                friendsAllUsersData: state.friendsAllUsersData.map(u => {
                    if(u.id === action.index) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                friendsAllUsersData: action.users,
            }
        case SET_FRIENDS:
            let friends = action.all.filter(user => user.followed === true);
            return {
                ...state,
                friendsData: friends,
            }
        case SELECT_PAGE:
            return {
                ...state,
                currentPage: action.newcurrent,
            }
        case SET_TOTAL_FRIENDS_COUNT:
            return {
                ...state,
                totalFriendsCount: action.totalCount,
                totalFriendsCountServ: action.totalCount,
            }
        case FETCHING_IS:
            return {
                ...state,
                isFetching: true,
                friendsAllUsersData: [],
                totalFriendsCount: 0,
            }
        case FETCHING_IS_NOT:
            return {
                ...state,
                isFetching: false,
                totalFriendsCount: state.totalFriendsCountServ,
            }
        case FRIENDS_FOLLOW_IN_PROGRESS_TOGGLE:
            return {
                ...state,
                friendsFollowInProgress: action.isFetching 
                    ? [...state.friendsFollowInProgress, action.index]
                    : state.friendsFollowInProgress.filter(id => id !== action.index),
            }
        default: return state;
    }
}

export default friendsReducer;

export const selectPageCreator = (newcurrent) => ({type: 'SELECT_PAGE', newcurrent});
export const followCreator = (index) => ({type: 'FOLLOW_ON_FRIENDS', index});
export const unfollowCreator = (index) => ({type: 'UNFOLLOW_ON_FRIENDS', index});
export const friendsFollowInProgressToggleCreator = (isFetching, index) => ({type: 'FRIENDS_FOLLOW_IN_PROGRESS_TOGGLE', isFetching, index});

const setUsersCreator = (users) => ({type: 'SET_USERS', users});
const setFriendsCreator = (all) => ({type: 'SET_FRIENDS', all});
const setTotalFriendsCountCreator = (totalCount) => ({type: 'SET_TOTAL_FRIENDS_COUNT', totalCount});
const fetchingIsCreator = () => ({type: 'FETCHING_IS'});
const fetchingIsNotCreator = () => ({type: 'FETCHING_IS_NOT'});

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(fetchingIsCreator());
        friendsAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(fetchingIsNotCreator());
            dispatch(setUsersCreator(data.items));
            dispatch(setTotalFriendsCountCreator(data.totalCount));
        });
    }
}
export const getFriendsThunkCreator = () => {
    return (dispatch) => {
        dispatch(fetchingIsCreator());
        friendsAPI.getFriends().then(data => {
            dispatch(fetchingIsNotCreator());
            dispatch(setFriendsCreator(data.items));
        });
    }
}
export const followThunkCreator = (index) => {
    return (dispatch) => {
        dispatch(friendsFollowInProgressToggleCreator(true, index));
        friendsAPI.followUser(index).then(data => {
            if(data.resultCode === 0) dispatch(followCreator(index));
            dispatch(friendsFollowInProgressToggleCreator(false, index));
        });
    }
}
export const unfollowThunkCreator = (index) => {
    return (dispatch) => {
        dispatch(friendsFollowInProgressToggleCreator(true, index));
        friendsAPI.unfollowUser(index).then(data => {
            if(data.resultCode === 0) dispatch(unfollowCreator(index));
            dispatch(friendsFollowInProgressToggleCreator(false, index));
        });
    }
}