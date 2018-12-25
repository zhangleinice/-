// 改造actionCreat，只写一个action，自动发success，pendding，failure请求

import onError from '../exception/index';

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
        // debugger
        const {type, payload} = action;

        if (!payload || (!isPromise(payload))) {
        // 将非promise的action指派给下一个中间件
            return next(action);
        }
      
        const [PENDING, SUCCESS, FAILURE] =  defaultTypes;
      
        let data = null;
      
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

            //test
            // onError(successAction)

            // console.log(value);
        
            // test
            return 1;
        };
      
        // Failure的处理
        const handleFailure = (value = null) => {
            const failureAction = getAction(`${type}_${FAILURE}`, value, true);
        
            next(failureAction);

            onError(failureAction)
        
        };
        
        // handlePending();
        
        // payload.then(handleSuccess, handleFailure)

        // return payload.then(handleSuccess, handleFailure)
      
        return payload.then(handleSuccess, handleFailure).then(v => console.log(v))
    };
};
  