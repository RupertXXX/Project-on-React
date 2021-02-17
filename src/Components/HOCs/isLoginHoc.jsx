import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin,
});

const withLoginCheck = (Component) => {
    let RedirectComponent = (props) => {
        if(!props.isLogin) return <Redirect to='/login' />
        else return <Component {...props} />
    }

    RedirectComponent = connect(mapStateToProps)(RedirectComponent);
    return RedirectComponent;
}

export default withLoginCheck;