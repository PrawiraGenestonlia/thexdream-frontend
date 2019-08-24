import React from 'reactn';
import { Route, Switch } from "react-router-dom";
//
import { Test, Main } from '../pages';
//
export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/test" component={Test} />
    </Switch>
  )
}