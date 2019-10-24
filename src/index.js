import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import meterTable from '../src/meterReader/meterTable'
import MeterReader from '../src/meterReader'
import Login from './login'
import OfficialForm from '../src/Official'
import personalTable from '../src/Personal/personalTable'
import "semantic-ui-css/semantic.min.css";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

 const routing = (
    <Router>
        <Switch>
            <Route path="/" component={App} exact={true}/>
            <Route path="/login" component={Login}></Route>
            <Route path="/MeterReader" component={MeterReader} />
            <Route path="/OfficialForm" component={OfficialForm} />
            <Route path="/personalTable" component={personalTable} />

            <Route path="/meterTable" component={meterTable} />
        </Switch>
    </Router>
 )
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
