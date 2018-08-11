import  * as api  from '../../../common/api/city'; 

export const CITY = 'CITY';
export const CITY_PENDING = 'CITY_PENDING';
export const CITY_SUCCESS = 'CITY_SUCCESS';
export const CITY_FAILURE = 'CITY_FAILURE';

export const city = data => {
    // redux-promise-middleware 
    return {
        type: CITY,
        payload: api.Cityinside()
    }
}

export const NUM = 'NUM';
export const num = data => {
    return (dispatch) => {
        api.Cityinside().then(res =>{
            dispatch ({
                type: CITY,
                payload: res.data
            })
        })
    }
}

