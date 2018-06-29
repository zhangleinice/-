import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import {logger} from './middleware/index';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

const store = createStore(
    rootReducer,
    // 使用applyMiddleware加载middlewares
    // thunk: 允许dispatch一个函数
    applyMiddleware(promise, thunk, logger)
)

export default store;