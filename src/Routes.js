import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import MyInfo from './pages/MyInfo/MyInfo';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/logIn" component={Login} />
          <Route exact path="/list" component={List} />
          <Route exact path="/myInfo" component={MyInfo} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/myInfo" component={MyInfo} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
