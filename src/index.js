// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import router from './app/admin/router/index';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {hashHistory} from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import rootReducer from './app/admin/store/reducer';
import {logger, thunkMiddleware} from './app/admin/store/middleware/index';
import 'antd/dist/antd.css';
import promiseMiddleware from './app/admin/store/middleware/redux-promise';
import {operationMiddleware} from './app/admin/store/middleware/redux-operation'; 

// compose增强creatStore
const configureStore = (initialState,history) =>{
    const middleware = [
        logger,
        thunkMiddleware,
        promiseMiddleware({onFailure: 'hooks.onError'}),
        operationMiddleware(),
        routerMiddleware(history)
    ];
    return compose(applyMiddleware(...middleware))(createStore)(rootReducer, initialState)
}

const store = configureStore({}, hashHistory);

// 增强history,完成react router与redux store的绑定
const history = syncHistoryWithStore(hashHistory, store)

// Provider作为根组件，传弟子组件的connect
ReactDOM.render(
    <Provider store={store}>
        {router(history)}
    </Provider>
    ,
    document.getElementById('root'));

