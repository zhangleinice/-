import  * as api  from '../../../common/api/city'; 

export const CITY = 'CITY';
export const City = (data) => {
   return {
       type: CITY,
       payload: api.Cityinside()
   }
}

