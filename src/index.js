import React from 'react';
import ReactDOM from 'react-dom';
import router from './app/admin/router/index';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {hashHistory} from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import rootReducer from './app/admin/store/reducer';
import {logger, promiseMiddleware, thunkMiddleware} from './app/admin/store/middleware/index';
// import promise from 'redux-promise-middleware';
// import thunk from 'redux-thunk';

// compose增强creatStore



const store = createStore(
    rootReducer,
    // routerReducer,
    // 使用applyMiddleware加载middlewares
    applyMiddleware(logger, promiseMiddleware, thunkMiddleware)
)

// 增强history,完成react router与redux store的绑定
// const history = syncHistoryWithStore(hashHistory,store)

// Provider作为根组件，传弟子组件的connect
ReactDOM.render(
    <Provider store={store}>
        {router(hashHistory)}
    </Provider>
    ,
    document.getElementById('root'));

