import  * as api  from '../../../common/api/city'; 

export const CITY = 'CITY';
// export const CITY_PENDING = 'CITY_PENDING';
// export const CITY_FULFILLED = 'CITY_FULFILLED';
// export const CITY_REJECTED = 'CITY_REJECTED';

export const city = data => {
    // api.Cityinside().then(res => {
    //     store.dispatch(
    //         {
    //             type: CITY,
    //             payload: res.data
    //         }
    //     )
    // })
    
    // redux-thunk
    // return (dispatch) => {
    //     api.Cityinside()
    //         .then(res => {
    //             dispatch ({
    //                 type: CITY_SUCCESS,
    //                 payload: res.data
    //             })
    //         })
    //         .catch(err => {
    //             dispatch ({
    //                 type: CITY_FAIL,
    //                 error: err
    //             })
    //         })
    // }

    // redux-promise 
    // return {
    //     type: CITY,
    //     payload: api.Cityinside()
    // }

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

