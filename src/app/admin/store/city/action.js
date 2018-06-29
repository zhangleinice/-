import  * as api  from '../../../common/api/city'; 

export const CITY = 'CITY';
export const city = data => {
    // 不用react-redux
    // api.Cityinside().then(res => {
    //     store.dispatch(
    //         {
    //             type: CITY,
    //             payload: res.data
    //         }
    //     )
    // })
    
    // redux-thunk
    return (dispatch) => {
        api.Cityinside().then(res =>{
            dispatch ({
                type: CITY,
                payload: res.data
            })
        })
    }

    // redux-promise
    // return {
    //     type: CITY,
    //     payload: api.Cityinside()
    // }
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

