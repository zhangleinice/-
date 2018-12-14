import { combineReducers }  from 'redux';
import getCity from './city/reducer';
import { routerReducer } from 'react-router-redux';
import { operationReducer } from './opreation-reducer';
// import { operationReducer } from '../middleware/redux-operation';

const rootReducer = combineReducers({
    // 将路由加入reducer
    routing: routerReducer,
    // 全局操作快照
    operation: operationReducer,
    getCity
});

export default rootReducer;