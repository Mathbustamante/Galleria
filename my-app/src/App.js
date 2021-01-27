import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Explore from './components/Explore';
import Default from './components/Default';
import ProductDetail from './components/ProductDetail';
import Toys from './components/Toys';
import Fashion from './components/Fashion';
import Craft from './components/Craft';
import New from './components/New';
import AboutUs from './components/AboutUs';
import Edit from './components/Edit';

class App extends Component {
  render() {
   
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route exact path="/aboutus" component={AboutUs}></Route>
          <Route exact path="/products/toys" component={Toys}></Route>
          <Route exact path="/products/fashion" component={Fashion}></Route>
          <Route exact path="/products/craft" component={Craft}></Route>
          <Route exact path="/new" component={New}></Route>
          <Route exact path="/edit/:id" component={Edit}></Route>
          <Route exact path="/explore" component={Explore}></Route>
          <Route exact path="/:id" component={ProductDetail}></Route>
          <Route component={Default}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
