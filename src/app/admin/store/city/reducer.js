// 必须是一个纯函数，可预测

import { CITY } from './action';

const initailState = {
    city: []
}

const getCity = (state = initailState, action) => {
    switch(action.type) {
        // redux-thunk
        case CITY:
            return {
                ...state,
                city: action.payload,
            };
        default :
            return state;
        // redux-promise
        // case CITY:
        //     console.log(action);
            // if(action.status === 'success') {
            //     console.log(111);
            //     return {
            //         ...state,
            //         city: action.payload
            //     }
            // }else {
            //     console.log(2222);
            //     return state;
            // }
    }   
}


export default getCity;