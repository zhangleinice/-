// 必须是一个纯函数，可预测

import { CITY_SUCCESS, NUM_SUCCESS } from './action';
import {fromJS} from 'immutable';
import {createReducer} from 'redux-immutablejs';
import {getObjReducer, getArrayReducer} from '../../util/reducer';

// const initailState = fromJS({
//     city: []
// })
// immutable
// export default createReducer(initailState, {
//     [CITY_SUCCESS]: (state, {payload}) =>{
//         return state.set('city', getArrayReducer(state, payload));
//     }
// })
const initailState = {
    city: []
}
debugger
const getCity = (state = initailState, action) => {
    switch(action.type) {
        // redux-promise
        case CITY_SUCCESS:
            console.log(action.payload);
            return {
                    ...state,
                    city: action.payload
                };
        case NUM_SUCCESS:
                return {
                    ...state,
                    city: action.payload
                };
        default :
            return state;
    }   
}

export default getCity;