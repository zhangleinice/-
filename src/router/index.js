import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import Home from '../page/home/index';
import Detail from '../page/detail/index';
import App from '../app';

export default history => {
    return (
        <Router history = {history}>
            <Route path='/' component={App}>
                <IndexRoute component = {Home} />
                <Route path = 'home' component = {Home}></Route>
                <Route path = 'detail/:id' component = {Detail}></Route>
            </Route>
        </Router>
    );
}; 