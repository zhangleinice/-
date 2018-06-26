import  * as api  from '../../../common/api/city'; 
import store from '../index';

export const CITY = 'CITY';
export const city = data => {
    store.dispatch(
        {
            type: CITY,
            payload: api.Cityinside()
        }
    )
}

export const NUM = 'NUM';
export const num = data => {
    store.dispatch(
        {
            type: NUM,
            payload: api.Cityinside()
        }
    )
}

