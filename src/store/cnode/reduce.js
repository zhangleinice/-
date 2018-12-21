import { GET_TOPICS_SUCCESS, GET_DETAIL_SUCCESS } from './action';

const initailState = {
    topics: {},
    detail: {}
}

const getTopics = (state = initailState, action) => {
    switch(action.type){
        case GET_TOPICS_SUCCESS:
            return {...state, topics: action.payload.data};
        case GET_DETAIL_SUCCESS:
            return {...state, detail: action.payload.data};
        default:
            return state;
    }
}

export default getTopics;