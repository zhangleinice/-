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

export const GET_DETAIL = 'GET_DETAIL';
export const GET_DETAIL_PENDING = 'GET_DETAIL_PENDING';
export const GET_DETAIL_SUCCESS = 'GET_DETAIL_SUCCESS';
export const GET_DETAIL_FAILURE = 'GET_DETAIL_FAILURE';
export const getDetail = id => {
    return {
        type: GET_DETAIL,
        payload: api.getDetail(id)
    }
}