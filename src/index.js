import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContextProvider from "./context/auth";
import Feed from './pages/feed/index';


ReactDOM.render(
  <ContextProvider>
      <React.StrictMode>
        <Router>
          <div>
            <Switch>
              <Route path="/feed">
                <Feed />
              </Route>
              <Route path="/">
              <SignIn />
              </Route>
            </Switch>
          </div>
        </Router>
      </React.StrictMode>,
  </ContextProvider>,
  document.getElementById('root')
);

reportWebVitals();
