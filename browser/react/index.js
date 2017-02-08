import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums.js';
import Album from './components/Album.js';
import Artists from './components/Artists';
import Artist from './components/Artist';
import {Route, Router, hashHistory, IndexRedirect, Link} from 'react-router';

ReactDOM.render(
	<div>
	  <Router history={hashHistory}>
		  <Route path = '/' component = {AppContainer}>
				<Route path='/albums' component= {Albums} />
				<Route path="/albums/:albumId" component= {Album} />
				<Route path='/artists' component= {Artists} />
				<Route path='/artists/:artistId' component= {Artist} />
				<IndexRedirect to='/albums' />
		  </Route>

	  </Router>
  </div>,
  document.getElementById('app')
);
