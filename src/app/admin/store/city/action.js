import  * as api  from '../../../common/api/city'; 
import store from '../index';



export const CITY = 'CITY';
export const city = data => {
    // api.Cityinside().then(res => {
    //     citys = res.data
    //     store.dispatch(
    //         {
    //             type: CITY,
    //             payload: res.data
    //         }
    //     )
    // })
    const xx = () => {
        let citys = [];
        return api.Cityinside().then(res => {
            citys = res.data
            // console.log(citys);
            return citys;
        })
    }
    xx();
    console.log(xx());
    return {
        type: CITY,
        payload: [{label:'北京'}]
    }
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

