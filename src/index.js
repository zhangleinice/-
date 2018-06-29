import React from 'react';
import ReactDOM from 'react-dom';
import router from './app/admin/router/index';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {hashHistory} from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
import rootReducer from './app/admin/store/reducer';
import {logger} from './app/admin/store/middleware/index';
import promiseMiddleware from 'redux-promise';

// compose增强creatStore


// 增强history
// const history = syncHistoryWithStore(hashHistory,store)
const store = createStore(
    rootReducer,
    // 使用applyMiddleware加载middlewares
    // thunk: 允许dispatch一个函数
    applyMiddleware(promiseMiddleware, thunk, logger)
)

// Provider作为根组件，传弟子组件的connect
ReactDOM.render(
    <Provider store={store}>
        {router(hashHistory)}
    </Provider>
    ,
    document.getElementById('root'));

