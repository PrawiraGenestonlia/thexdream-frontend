import React, { setGlobal } from 'reactn';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import './css/tailwind.css';
import Routes from './routes'
import * as serviceWorker from './serviceWorker';
import { NavBar } from './components'

setGlobal({
  gUserAuth: false,
  gUserID: "",
  gIsSidebarCollapse: false,
  gTestState: 1
});

ReactDOM.render(
  <Router>
    <NavBar />
    <Routes />
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
