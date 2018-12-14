import  * as api  from '../../api/city'; 

function isPromise(value) {
    if (value !== null && typeof value === 'object') {
        return value && typeof value.then === 'function';
    }
    return false;
}

export const CITY = 'CITY';
export const CITY_PENDING = 'CITY_PENDING';
export const CITY_SUCCESS = 'CITY_SUCCESS';
export const CITY_FAILURE = 'CITY_FAILURE';
export const city = data => {
    // console.log(api.Cityinside());
    // console.log(isPromise(api.Cityinside()));
    return {
        type: CITY,
        payload: api.Cityinside()
    }
}

export const NUM = 'NUM';
export const NUM_SUCCESS = 'NUM_SUCCESS';
export const num = data => {
    return {
        type: NUM,
        payload: api.Cityinside()
    }
};

