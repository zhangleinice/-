import http from '../util/axios';
import axios from 'axios';

const baseUrl = 'https://cnodejs.org/api/v1';


// export const getTopics = data => {
//     return http.get(`${baseUrl}/topics`, data)
// }

export const getTopics = data => {
    return axios.get(`${baseUrl}/topics`)
}

export const getDetail = data => {
    return axios.get(`${baseUrl}/topic/${data}`)
}