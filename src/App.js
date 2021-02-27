import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {initializeApp} from './redux/reducers/appReducer';
import Loading from './common/loading/loading';
import Nav from './Components/nav/nav';
import HeaderContainer from './Components/header/HeaderContainer';
import MessagesContainer from './Components/Content/messages/messagesContainer';
import FriendsContainer from './Components/Content/friends/friendsContainer';
import NewsContainer from './Components/Content/news/newsContainer';
import ProfileContainer from './Components/Content/profile/profileContainer';
import LoginContainer from './Components/Content/login/loginContainer';
import Game from './Components/Content/games/game';
import './App.css';
import SettingsContainer from './Components/Content/settings/settingsContainer';

class App extends React.Component{
  componentDidMount() {
    this.props.initializeApp();
  }
  render(){
    if(this.props.initialized === false) {
      return <Loading />
    }
    
    return (
      <div className="main">
        <HeaderContainer />
        <div className="wrapper">
          <div className="grid">
            <Nav />
            <div className="content">
              
              <Switch>
                <Route exact path='/' render={ () => <Redirect to='/profile' /> } />
                <Route path='/messages' render={ () => <MessagesContainer /> } />
                <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
                <Route path='/users' render={ () => <FriendsContainer /> } />
                <Route path='/news' render={ () => <NewsContainer /> } />
                <Route path='/games' render={ () => <Game /> } />
                <Route path='/login' render={ () => <LoginContainer /> } />
                <Route path='/settings' render={ () => <SettingsContainer />} /> 
                <Route path='*' render={ () => <div>404 NOT FOUND</div>} /> 
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
      initializeApp: () => {
          dispatch(initializeApp())
      }
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(App);