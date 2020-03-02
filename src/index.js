import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './components/about/index';
import Projects from './components/projects/index';
import Home from './components/home/index';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSmileWink } from '@fortawesome/free-solid-svg-icons'
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

library.add(faSmileWink);

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/projects" component={Projects}></Route>
        </Switch>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
