import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import './index.css';
import './css/tailwind.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

setGlobal({
  gUserAuth: false,
  gUserID: "",
  gIsSidebarCollapse: false,
  gTestState: 1
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
