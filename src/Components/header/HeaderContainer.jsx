// import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

let mapStateToProps = (state) => ({
    data: state.auth.data,
    messages: state.auth.messages,
    isLogin: state.auth.isLogin,
})

const HeaderContainer = connect(mapStateToProps, null)(Header);

export default HeaderContainer;