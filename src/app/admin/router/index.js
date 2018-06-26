import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import Home from '../page/home/home';
import List from '../page/list/list';
import Detail from '../page/detail/detail';

export default (history) => {
    return (
        <Router history = {history}>
            <Route path='/' component={Home}>
                <IndexRoute component = {List} />
                <Route path = 'list' component = {List}></Route>
                <Route path = 'detail' component = {Detail}></Route>
            </Route>
        </Router>
    );
}; 