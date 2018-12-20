import * as api from '../../api/cnode';

export const GET_TOPICS = 'GET_TOPICS';
export const GET_TOPICS_PENDING = 'GET_TOPICS_PENDING';
export const GET_TOPICS_SUCCESS = 'GET_TOPICS_SUCCESS';
export const GET_TOPICS_FAILURE = 'GET_TOPICS_FAILURE';
export const getTopics = () => {
    return {
        type: GET_TOPICS,
        payload: api.getTopics()
    }
}