import React from 'react';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';

import App from '../app/index'

const router = (
    <Router history = {hashHistory}>
        <Route path='/' component={App}>

        </Route>
    </Router>  
)
export default router;