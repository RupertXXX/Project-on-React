import {createSelector} from 'reselect';

const getUsers = (state) => {
    let users = state.friendsPage.friendsAllUsersData;
    return users;
};
export const getUsersComplecated = createSelector( getUsers, (users) => {
    return users;
});

export const getFriends = (state) => {
    let friends = state.friendsPage.friendsData;
    return friends;
}

export const getPageSize = (state) => {
    let pageSize = state.friendsPage.pageSize;
    return pageSize;
};

export const getTotalFriendsCount = (state) => {
    let totalFriendsCount = state.friendsPage.totalFriendsCount;
    return totalFriendsCount;
};

export const getCurrentPage = (state) => {
    let currentPage = state.friendsPage.currentPage;
    return currentPage;
};

export const getIsFetching = (state) => {
    let isFetching = state.friendsPage.isFetching;
    return isFetching;
};

export const getFriendsFollowInProgress = (state) => {
    let friendsFollowInProgress = state.friendsPage.friendsFollowInProgress;
    return friendsFollowInProgress;
};