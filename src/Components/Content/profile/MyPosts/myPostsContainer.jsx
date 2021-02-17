import { connect } from 'react-redux';
import { addPostCreateAction } from '../../../../redux/reducers/profileReducer';
import MyPosts from './myPosts';

const mapStateToProps = (state) => {
    return {
        profile_post: state.profilePage.profilePostsData,
        newPostText: state.profilePage.newPosttext
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendPost: (newText) => {
            dispatch(addPostCreateAction(newText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;