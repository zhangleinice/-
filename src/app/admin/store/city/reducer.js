import { CITY, NUM } from './action';

const initailState = {
    city: []
}


const getCity = (state = initailState, action) => {
    // console.log(action)
    switch(action.type) {
        case CITY:
            action.payload.then(res => {
                state.city = res.data
            }) 
            return 
            break;
        default :
            return state;
        break;
    }   
}


export default getCity;