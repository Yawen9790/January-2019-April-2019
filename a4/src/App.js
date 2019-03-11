/*********************************************************************************
* WEB422 – Assignment 4
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students. *
* Name: _Yawen Deng_ Student ID: _152023164_ Date: _Feb 15, 2019_
*
* ********************************************************************************/



import React, { Component } from 'react';

import Overview from './Overview/Overview';//.js';

import Projects from './Projects/Projects';//.js';
import Employees from './Employees/Employees';//.js';
import Teams from './Teams/Teams';//.js';

import NotFound from './NotFound/NotFound';//.js';

import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <Overview />
        )} />

        <Route exact path='/projects' render={() => (
          <Projects />
        )} />

        <Route exact path='/teams' render={() => (
          <Teams />
        )} />

        <Route exact path='/employees' render={() => (
          <Employees />
        )} />

        <Route render={() => (
          <NotFound />
        )} />
      </Switch>
    );
  
  }

}


export default App;

