import React from 'reactn';
import { Route, Switch } from "react-router-dom";
//
import App from '../App'
import { Test } from '../pages';
//
export default () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/test" component={Test} />
    </Switch>
  )
}