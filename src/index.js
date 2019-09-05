import React, { setGlobal } from 'reactn';
import { Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import './index.css';
import './css/tailwind.css';
import './css/hamburgers.css';
import Routes from './routes'
import * as serviceWorker from './serviceWorker';
import { NavBar, InternetStatusBar } from './components'
import { createBrowserHistory, createHashHistory } from 'history';
import { Main } from './pages';

setGlobal({
  gUserAuth: false,
  gUserID: "",
  gIsSidebarCollapse: false,
  gTestState: 1,
  gShowPromptModal: true,
  gSelectedNews: ''
});

function configureHistory() {
  return window.matchMedia('(display-mode: standalone)').matches
    ? createHashHistory()
    : createBrowserHistory()
}

const history = configureHistory()

ReactDOM.render(
  <Router history={history} className="overflow-hidden">
    <InternetStatusBar className="overflow-hidden" />
    <header className="fixed z-10 top-0">
      <NavBar history={history} className="fixed z-10 top-0 overflow-hidden" />
    </header>
    <div className="scrolling-touch overflow-visible mt-16 ml-3 mr-3">
      <Main />
      <Routes />
    </div>
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
