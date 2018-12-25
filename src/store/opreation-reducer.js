// 没发一次action，就生成一个operation，就能在组件里进行异步处理。
// 把action的逻辑提到了组件内部控制
const defaultTypes = [
    'PENDING',
    'SUCCESS',
    'FAILURE'
];

// /_(PENDING|SUCCESS|FAILURE)$/
const PROMISE_TYPE_STATUS_EXP = new RegExp('(\\w*)_(' + defaultTypes.join('|') + ')$');

const defaultState = { type: '', status: '', result: null, loading: {} };

export function operationReducer(state = defaultState, { type, payload, meta }) {
    // debugger
    // 不需要进入操作快照的记录
    if (type.indexOf('@@') === 0 || (meta && meta.operation === false)) {
        return state;
    }
    const origin = type.match(PROMISE_TYPE_STATUS_EXP);

    /**
     * type: GET_TOPICS_SUCCESS
     * status: SUCCESS
     * origin: GET_TOPICS
     */
    
    const newState = {
        ...state,
        type: type,
        result: payload,
        //加入loading
        status: origin[2],
        origin: origin[1],

        // loading: {}
    };

    // newState.status === 'PENDING' ? loading = true : loading = false 
    if(origin){
        newState.loading[newState.origin] = newState.status === 'PENDING';
    }

    return newState;
}