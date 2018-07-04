import React from 'react';
import ReactDOM from 'react-dom';
import router from './app/admin/router/index';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {hashHistory} from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
import rootReducer from './app/admin/store/reducer';
import {logger, promiseMiddleware, thunkMiddleware} from './app/admin/store/middleware/index';
// import promise from 'redux-promise-middleware';
// import thunk from 'redux-thunk';

// compose增强creatStore


// 增强history
// const history = syncHistoryWithStore(hashHistory,store)
const store = createStore(
    rootReducer,
    // 使用applyMiddleware加载middlewares
    applyMiddleware(logger, promiseMiddleware, thunkMiddleware)
)

// Provider作为根组件，传弟子组件的connect
ReactDOM.render(
    <Provider store={store}>
        {router(hashHistory)}
    </Provider>
    ,
    document.getElementById('root'));

