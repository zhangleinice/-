import React from 'react';
import ReactDOM from 'react-dom';
import router from './app/admin/router/index';
import {Provider} from 'react-redux';
// import { createStore, compose, applyMiddleware } from 'redux';
// import Thunk from 'redux-thunk';
import {hashHistory} from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
// import rootReducer from './app/admin/store/reducer';
// import rootReducer from './app/admin/store/city/reducer';
import store from './app/admin/store/index';

// compose增强creatStore


// 增强history
// const history = syncHistoryWithStore(hashHistory,store)

// Provider作为根组件，传弟子组件的connect
ReactDOM.render(
    <Provider store={store}>
        {router(hashHistory)}
    </Provider>
    ,
    document.getElementById('root'));

