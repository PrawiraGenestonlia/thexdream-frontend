import React from 'reactn';
import { Route, Switch } from "react-router-dom";
import config from '../config';
//
import {
  // Test,
  Main,
  HomePage,
  TopNews,
  About,
  Setting,
  NotFound
} from '../pages';
//
export default () => {
  return (
    <Switch>
      <Route exact path={config.routes.homepage} component={HomePage} />
      <Route exact path={config.routes.topnews} component={TopNews} />
      <Route exact path={config.routes.about} component={About} />
      <Route exact path={config.routes.setting} component={Setting} />
      <Route component={NotFound} />
    </Switch>
  )
}