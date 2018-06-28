import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import {logger} from './middleware/index';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    // 使用applyMiddleware加载middlewares
    // applyMiddleware(thunk, logger)
)

export default store;