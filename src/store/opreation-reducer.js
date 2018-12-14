// 没发一次action，就生成一个operation，就能在组件里进行异步处理。
// 把action的逻辑提到了组件内部控制
const defaultTypes = [
    'PENDING',
    'SUCCESS',
    'FAILURE'
];

// /_(PENDING|SUCCESS|FAILURE)$/
// const PROMISE_TYPE_STATUS_EXP = new RegExp('(\\w*)_(' + defaultTypes.join('|') + ')$');

const defaultState = { type: '', status: '', result: null, loading: {} };

// 操作快照Reducer
export function operationReducer(state = defaultState, { type, payload, meta }) {
    // debugger
    // 不需要进入操作快照的记录
    if (type.indexOf('@@') === 0 || (meta && meta.operation === false)) {
        return state;
    }

    // const origin = type.match(PROMISE_TYPE_STATUS_EXP);

    const newState = {
        type: type,
        result: payload,
    };

    return newState;
}