// 根据action，编写复杂的特定的promiseMiddleWare
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

export const promise2 = () => {
    return ({dispatch, getState}) => next => action => {
        
        const { type, payload } = action;
        
        const [PENDING, SUCCESS, FAILURE] = defaultTypes;

        // payload不是promise时，指派给下一个中间件
        if(!payload || !isPromise(payload)){
            return next(action)
        }
        
    }
}