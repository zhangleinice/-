// middleware：增强dispatch，简化actionCreator。

// ### 基本的中间件

import { isFSA } from 'flux-standard-action';
// next = store.dispatch

// 打印日志
export const logger = store => next => action => {
    console.log('dispatching', store.getState());
    let result = next(action);
    console.log('next state', store.getState());
    return result
}

// redux-thunk
export const thunkMiddleware = ({dispatch, getState, extraArgument}) => {
    return next => action => {
        if(typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }
        return next(action);
    }
}

const isPromise = val => {
    return val && typeof val.then === 'function';
}

//redux-promise
export const promiseMiddleware = ({dispatch}) => {
  return next => action => {
    if(!isFSA(action)) {
      return isPromise(action) 
            // 1,当中间接收到的是一个Promise实例，会dispatch掉resoved的值，对于reject的结果并不做任何处理
             ? action.then(dispatch) 
             : next(action);
    }
    return isPromise(action.payload)
          // 2.当中间件接收的是一个符合FSA的action,会接着判断action.payload是不是一个promise,如果不是则直接转给下一个中间件，是则调用then,同时使用catch捕获异常，这里出现两种情况，查看源码：
           ?action.payload.then(
             result => dispatch({...action,payload: result}),
             error => {
               dispatch({...action,payload: error,error: true})
               return Promise.reject(error)
             }
           )
           :next(action)
  }
} 




