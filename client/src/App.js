import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/public/Home';
import Shop from './components/public/Shop';
import Checkout from './components/public/Checkout';
import Success from './components/public/Success';
import Admin from './components/admin/Admin';
import Login from './components/auth/Login';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/shop" component={Shop}/>
        <Route path="/shop/:category" component={Shop}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/success" component={Success}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/login" component={Login}/>

      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
