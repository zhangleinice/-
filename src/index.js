import React from 'react';
import ReactDOM from 'react-dom';
import router from './router/index';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {hashHistory} from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import rootReducer from './store/reducer';
// import {logger, thunkMiddleware} from './middleware/index';
// import applyWorker from './middleware/redux-worker';
import 'antd/dist/antd.css';
import promiseMiddleware from './middleware/redux-promise3';
import {operationMiddleware} from './middleware/redux-operation'; 

// 创建 web worker
// const worker = new Worker('../scripts/build.js')
// compose增强creatStore
const configureStore = (initialState, history) =>{
    const middlewares = [
        // promiseMiddleware({onFailure: 'hooks.onError'}),
        promiseMiddleware({}),
        // operationMiddleware(),
        routerMiddleware(history)
    ];
    return applyMiddleware(...middlewares)(createStore)(rootReducer, initialState)
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

