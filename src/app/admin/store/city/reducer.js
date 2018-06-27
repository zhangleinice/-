// 必须是一个纯函数，可预测

import { CITY } from './action';

const initailState = {
    city: []
}

const getCity = (state = initailState, action) => {
    switch(action.type) {
        case CITY:
            return {
                ...state,
                city: action.payload,
            };
        default :
            return state;
    }   
}


export default getCity;