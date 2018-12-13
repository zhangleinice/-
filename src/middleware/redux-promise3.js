/*
 * @Author: rocky 
 * @since: 2018-12-13 17:10:59 
 */// 操作快照
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
  
export default () => {
    
    return ({getState}) => next => action => {
      
        const {type, payload} = action;

        if (!payload || (!isPromise(payload))) {
        // 将非promise的action指派给下一个中间件
            return next(action);
        }
      
        const [PENDING, SUCCESS, FAILURE] =  defaultTypes;
      
        let data = null;
      
        // 转换参数
        // if (!isPromise(payload) && typeof payload === 'object') {
        // // payload={promise|data|callback}
        //     // console.log(1);
        //     // promise = payload.promise;
        //     // data = payload.data;
        //     // if (typeof payload.callback == 'function') {
        //     //     callback = payload.callback;
        //     // }
        // } else {
        //     // console.log(2);
        // // payload = promise;
        //     promise = payload;
        //     data = null;
        // }
      
        // 根据参数获取新派生的Action
        const getAction = (type, newPayload, isRejected) => ({
            type: type,
            ...newPayload ? {payload: newPayload} : {},
        });
      
        // Pending的处理
        const handlePending = () => {
            const pendingAction = getAction(`${type}_${PENDING}`, data, false);
        
            next(pendingAction);
        
        };
      
        // Success的处理
        const handleSuccess = (value = null) => {
            const successAction = getAction(`${type}_${SUCCESS}`, value, false);
            
            next(successAction);
        
        };
      
        // Failure的处理
        const handleFailure = (value = null) => {
            const failureAction = getAction(`${type}_${FAILURE}`, value, true);
        
            next(failureAction);
        
        };
      
        return payload.then(handleSuccess, handleFailure)
    };
};
  