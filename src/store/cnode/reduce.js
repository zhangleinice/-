import { GET_TOPICS_SUCCESS } from './action';

const initailState = {
    topics: {}
}

const getTopics = (state = initailState, action) => {
    switch(action.type){
        case GET_TOPICS_SUCCESS:
            return {...state, topics: action.payload.data};
        default:
            return state;
    }
}

export default getTopics;