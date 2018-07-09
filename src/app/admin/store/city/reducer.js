// 必须是一个纯函数，可预测

import { CITY } from './action';
// import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

const initailState = {
    city: []
}

const getCity = (state = initailState, action) => {
    switch(action.type) {
        // redux-thunk
        // case CITY_SUCCESS:
        //     return {
        //         ...state,
        //         city: action.payload,
        //     };
        // case CITY_FAIL:
        //     return {
        //         ...state,
        //         city: action.error,
        //     };
        // default :
        //     return state;

        // redux-promise
        case CITY:
            if(action.payload.status === 200) {
                return {
                    ...state,
                    city: action.payload
                }
            }else {
                console.log('服务器错误！');
                return state;
            }
        default :
            return state;
    }   
}

export default getCity;