import { combineReducers }  from 'redux';
import getCity from './city/reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    getCity,
    // 将路由加入reducer
    routing: routerReducer
});

export default rootReducer;