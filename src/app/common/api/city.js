import http from '../util/axios';

// moke test
export const Cityinside = (data) => {
    return http.get('/data/Cityinside.json', data)
}