/*
 * reducer工具方法
 * @Author: ray.pan 
 * @since: 2017-11-02 15:08:10 
 */

import {fromJS} from 'immutable';
import _ from 'lodash';

// 获取单纯Obj类型的reducer
export function getObjReducer(state, payload, isData){
    let result = {};
    if(!_.isEmpty(payload)){
        if(isData){
            result = _.assign({}, result, payload);
        }else{
            result = _.assign({}, result, !_.isEmpty(payload.data) ? payload.data : {});
        }
    }
    return fromJS(result);
}

// 获取单纯Array类型的reducer
export function getArrayReducer(state, payload, isData){
    let result = [];
    if(!_.isEmpty(payload)){
        if(isData){
            result = payload;
        }else{
            result = !_.isEmpty(payload.data) ? payload.data : [];
        }
    }
    return fromJS(result);
}

// 获取merge obj类型的reducer
export function getMergeReducer(state, payload, meta){
    let result = {};
    if(!_.isEmpty(payload)){
        const {data = []} = payload;
        result[meta] = data || [];
    }
    return fromJS(result);
}

// 根据配置转换对象里int到string
export function transformIntToString(data, keyList){
    keyList.forEach(key=>{
        data[key] = data[key] ? data[key] + '' : null;
    });
    return data;
}