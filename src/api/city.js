import http from '../util/axios';

const baseUrl = 'https://cnodejs.org/api/v1';

// moke test
export const Cityinside = (data) => {
    return http.get('/data/Cityinside.json', data)
}


export const getTopics = data => {
    return http.get(`${baseUrl}/topics`, data)
}