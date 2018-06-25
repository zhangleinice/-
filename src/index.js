import React from 'react';
import ReactDOM from 'react-dom';
import router from './app/admin/router/index';
import {Provider} from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import rootReducer from './app/admin/store/reducer';

// compose对creatStore的增强
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(Thunk)
    )
)

// 增强history
const history = syncHistoryWithStore(hashHistory,store)

// Provider作为根组件，传弟子组件的connect
ReactDOM.render(
    <Provider store={store}>
        {router(history)}
    </Provider>
    ,
    document.getElementById('root'));

