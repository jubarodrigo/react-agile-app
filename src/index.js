import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './container/Home';
import Releases from './container/Releases';
import Backlogs from './container/Backlogs';
import Sprints from './container/Sprints';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='releases' component={Releases} />
            <Route path='backlogs' component={Backlogs} />
            <Route path='sprints' component={Sprints} />
        </Route>
    </Router>
    , 
    document.getElementById('root')
);
serviceWorker.unregister();
