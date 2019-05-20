import React from 'react';
import { Route, Switch } from 'react-router-dom';


// pages
import Home from './pages/Home';
import About from './pages/About';

export default props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </Switch>
);