import { GET_TOPICS_SUCCESS, GET_DETAIL_SUCCESS } from './action';
import {fromJS} from 'immutable';
import {createReducer} from 'redux-immutablejs';
import {getObjReducer} from '../../util/reducer';

// const initailState = {
//     topics: {},
//     detail: {}
// }

// const getTopics = (state = initailState, action) => {
//     switch(action.type){
//         case GET_TOPICS_SUCCESS:
//             return {...state, topics: action.payload.data};
//         case GET_DETAIL_SUCCESS:
//             return {...state, detail: action.payload.data};
//         default:
//             return state;
//     }
// }


// 结合immutablejs
const initailState = fromJS({
    topics: {},
    detail: {}
})

const getTopics = createReducer(initailState, {
    [GET_TOPICS_SUCCESS]: (state, {payload}) => {
        return state.set('topics', getObjReducer(state, payload))
    },
    [GET_DETAIL_SUCCESS]: (state, {payload}) => {
        return state.set('detail', getObjReducer(state, payload))
    }
})

export default getTopics;