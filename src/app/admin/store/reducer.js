import { combineReducers }  from 'redux';
import getCity from './city/reducer';

const rootReducer = combineReducers({
    getCity
});

export default rootReducer;