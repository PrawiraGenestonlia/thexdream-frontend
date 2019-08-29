import React, { setGlobal } from 'reactn';
import { Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import './css/tailwind.css';
import Routes from './routes'
import * as serviceWorker from './serviceWorker';
import { NavBar, InternetStatusBar } from './components'
import { createBrowserHistory, createHashHistory } from 'history';

setGlobal({
  gUserAuth: false,
  gUserID: "",
  gIsSidebarCollapse: false,
  gTestState: 1,
  gShowPromptModal: true,
});

function configureHistory() {
  return window.matchMedia('(display-mode: standalone)').matches
    ? createHashHistory()
    : createBrowserHistory()
}

const history = configureHistory()

ReactDOM.render(
  <Router history={history} className="overflow-hidden">
    <div className="overflow-hidden">
      <InternetStatusBar className="overflow-hidden" />
      <header style={{ position: 'fixed', zIndex: '10' }}>
        <NavBar className="fixed top-0 overflow-hidden" />
      </header>

      <Routes />
    </div>

  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
