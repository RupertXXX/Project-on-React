import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {initializeApp} from './redux/reducers/appReducer';
import './App.css';
import NotFound from './Components/notFound/notFound'
import Loading from './common/loading/loading';
import Nav from './Components/nav/nav';
import HeaderContainer from './Components/header/HeaderContainer';
import MessagesContainer from './Components/Content/messages/messagesContainer';
import FriendsContainer from './Components/Content/friends/friendsContainer';
import ProfileContainer from './Components/Content/profile/profileContainer';
import Game from './Components/Content/games/game';
import SettingsContainer from './Components/Content/settings/settingsContainer';
import NewsContainer from './Components/Content/news/newsContainer';
import LoginContainer from './Components/Content/login/loginContainer';
import ErrorBoundary from './common/errorBoundary/errorBoundary';

class App extends React.Component{
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    console.error(promiseRejectionEvent);
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
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
                <Route path='/messages' render={ () => <ErrorBoundary  name="webpage"> <MessagesContainer /> </ErrorBoundary> } />
                <Route path='/profile/:userId?' render={ () => <ErrorBoundary  name="webpage"> <ProfileContainer /> </ErrorBoundary> } />
                <Route path='/users' render={ () => <ErrorBoundary  name="webpage"> <FriendsContainer /> </ErrorBoundary> } />
                <Route path='/news' render={ () => <NewsContainer forErrorName="webpage" />} />
                <Route path='/games' render={ () => <ErrorBoundary  name="webpage"> <Game /> </ErrorBoundary> } />
                <Route path='/login' render={() => <LoginContainer forErrorName="webpage" />} />
                <Route path='/settings' render={ () => <ErrorBoundary  name="webpage"> <SettingsContainer /> </ErrorBoundary> } /> 
                <Route path='*' render={ () => <NotFound /> } /> 
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