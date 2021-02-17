import React from 'react';
import { reduxForm, Field, reset } from 'redux-form';
import { maxLengthCreator, required } from '../../../../common/utils/validators/validators';
import Post from './Post/post';
import c from './myPosts.module.css';
import { Textarea } from '../../../../common/formControls/formControls';

const maxLength30 = maxLengthCreator(30);

const MyPostsForm = (props) => {
    return(
    <form onSubmit={props.handleSubmit} className={c.addPost}>
        <Field validate={[required, maxLength30]} name='newPost' placeholder="Text of your new post" component={Textarea} />
        <button name='Submit' className={c.addPost_button} >+</button>
    </form>
    )
}

const MyPostsFormWithRedux = reduxForm({form: 'profileNewPostForm'})(MyPostsForm);

const MyPosts = (props) => {

    let profilePostsData_is = props.profile_post.map(obj => <Post number={obj.number} message={obj.message} key={obj.id} /> );
    let sendPost = (formData, dispatch) => {
        props.sendPost(formData.newPost);
        dispatch(reset('profileNewPostForm'))
    }

    return (
        <div>
            <div className={c.addPost_title}>Add post</div>
            <MyPostsFormWithRedux onSubmit={sendPost} />
            { profilePostsData_is  /* Post */}
        </div>
    );
}

export default MyPosts;