// 操作快照
// const operation = 'OPERATION';
const defaultTypes = [
    'PENDING',
    'SUCCESS',
    'FAILURE'
];
  
function isPromise(value) {
    if (value !== null && typeof value === 'object') {
        return value && typeof value.then === 'function';
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

        // console.log(action);
      
        if (!payload || (!isPromise(payload) && !isPromise(payload.promise))) {
        // 将非promise的action指派给下一个中间件
            return next(action);
        }
      
        const [PENDING, SUCCESS, FAILURE] = (meta || {}).promiseTypeSuffixes || promiseTypeSuffixes;
      
        let promise;
        let data;
        let callback = function () {
      
        };
      
        // 转换参数
        if (!isPromise(payload) && typeof payload === 'object') {
        // payload={promise|data|callback}
            promise = payload.promise;
            data = payload.data;
            if (typeof payload.callback == 'function') {
                callback = payload.callback;
            }
        } else {
        // payload = promise;
            promise = payload;
            data = null;
        }
      
        // 根据参数获取新派生的Action
        const getAction = (type, newPayload, isRejected) => ({
            type: type,
            ...newPayload ? {payload: newPayload} : {},
            ...meta ? {meta} : {},
            ...isRejected ? {error: true} : {}
        });
      
        // Pending的处理
        const handlePending = () => {
            const pendingAction = getAction(`${type}_${PENDING}`, data, false);
        
            next(pendingAction);
        
            if (!meta.silent && typeof onPending == 'function') {
                onPending(action, getState());
            }
        };
      
        // Success的处理
        const handleSuccess = (value = null) => {
            const successAction = getAction(`${type}_${SUCCESS}`, value, false);
            
            next(successAction);
        
            if (!meta.silent && typeof onSuccess == 'function') {
                onSuccess(successAction, getState());
            }
        
            return {value, action: successAction};
        };
      
        // Failure的处理
        const handleFailure = (value = null) => {
            const failureAction = getAction(`${type}_${FAILURE}`, value, true);
        
            next(failureAction);
        
            if (!meta.silent && typeof onFailure == 'function') {
                onFailure(failureAction, getState());
            }
        
            const error = value instanceof Error ? value : new Error();
            error.value = value;
            error.action = failureAction;
        
            return error;
        };
      
        handlePending();
      
        return promise.then(handleSuccess, handleFailure).then(callback);
    };
};
  