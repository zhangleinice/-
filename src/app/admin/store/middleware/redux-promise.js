
const defaultTypes = [
    'PENDING',
    'SUCCESS',
    'FAILURE'
];

function isPromise(value) {
    if(value != null && typeof value === 'object') {
        return value && typeof value.then === 'function'
    } 
    return false;
}

/**
   * @function promiseMiddleware
   * promiseTypeSuffixes 三种状态的后缀
   * onPending 全局处理Pending状态
   * onSuccess 全局处理Success状态
   * onFailure 全局处理Failure状态
   * @returns {function}
   */

export default ({promiseTypeSuffixes = defaultTypes, onPending, onSuccess, onFailure}) => {
    return ({getState}) => next => action => {

        const {type, payload, meta = {}} = action;

        

    }
}