import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import SignUp from './pages/SignUp/SignUp';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/list" component={List} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/logIn" component={Login} />
          <Route exact path="/detail/:id" component={Detail} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
