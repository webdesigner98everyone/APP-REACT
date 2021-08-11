import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Dropdown from '../pages/Dropdown';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route  exact path="/" component={Login}/>
        <Route  exact path="/menu" component={Menu}/>
        <Route  exact path="/dropdown" component={Dropdown}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
