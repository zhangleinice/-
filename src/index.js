import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/admin/app/index';
import router from './app/admin/router/index';
import {Rrovider} from 'react-redux';

ReactDOM.render(
    router
    ,
    document.getElementById('root'));

