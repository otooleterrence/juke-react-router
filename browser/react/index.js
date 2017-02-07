import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import {Route, Router, hashHistory} from 'react-router';

ReactDOM.render(
	<div>
  <Router history={hashHistory}>
  <Route path = '/' component = {AppContainer}>
  </Route>
  </Router>
  </div>,
  document.getElementById('app')
);
