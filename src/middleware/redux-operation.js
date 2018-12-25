/**
 * 操作快照中间件
 */

const defaultTypes = [
    'PENDING',
    'SUCCESS',
    'FAILURE'
];

// /_(PENDING|SUCCESS|FAILURE)$/
const PROMISE_TYPE_STATUS_EXP = new RegExp('(\\w*)_(' + defaultTypes.join('|') + ')$');

// 操作快照中间件
export function operationMiddleware() {
    return () => next => action => {
        setTimeout(() => {
            next(action);
        }, 0);
    };
}

const defaultState = { type: '', status: '', result: null, loading: {} };

// 操作快照Reducer
export function operationReducer(state = defaultState, { type, payload, meta }) {
    // debugger
    // 不需要进入操作快照的记录
    if (type.indexOf('@@') == 0 || (meta && meta.operation === false)) {
        return state;
    }
    debugger
    const origin = type.match(PROMISE_TYPE_STATUS_EXP);
    
    const newState = {
        ...state,
        type: type,
        time: Date.now(),
        origin: origin ? origin[1] : type,
        status: origin ? origin[2] : defaultTypes[1],
        result: payload,
    };

    if (origin) {
        newState.loading[newState.origin] = newState.status === 'PENDING';
    }

    console.log(newState);

    return newState;
}