## 项目运行

  ```sh
  git clone git@github.com:zhangleinice/redux-demo.git
  npm install
  npm run dev
  ```

## Redux

![Image text](https://github.com/zhangleinice/-/blob/master/public/imgs/redux.jpg)

### redux主要由三部分组成：store，reducer，action。

### store:是一个对象，它有四个主要的方法：

### 1 dispatch:

> 用于action的分发——在createStore中可以用middleware中间件对dispatch进行改造，比如当action传入dispatch会立即触发reducer，有些时候我们不希望它立即触发，而是等待异步操作完成之后再触发，这时候用redux-thunk对dispatch进行改造，以前只能传入一个对象，改造完成后可以传入一个函数，在这个函数里我们手动dispatch一个action对象，这个过程是可控的，就实现了异步。

### 2 subscribe:

> 监听state的变化,当我们需要知道state是否变化时可以调用，它返回一个函数，调用这个返回的函数可以注销监听。 

### 3 getState:

> 获取store中的state——当我们用action触发reducer改变了state时，需要再拿到新的state里的数据，毕竟数据才是我们想要的。利用subscribe监听到state发生变化后调用它来获取新的state数据。

```js
  store.subscribe(() => {
      this.setState({
          citys: store.getState().getCity.city
      });
  })
```

### 4 replaceReducer:

> 替换reducer，改变state修改的逻辑。

### action 

> 可以这样理解，Action 描述当前发生的事情。改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store。action是一个对象，其中type属性是必须的，同时可以传入一些数据。action可以用actionCreactor进行创造。dispatch就是把action对象发送出去。

```js
  export const city = data => {
    api.Cityinside().then(res => {
          store.dispatch(
              {
                  type: CITY,
                  payload: res.data
              }
          )
      })
  }
```

### reducer

> Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。<br />Reducer 函数最重要的特征是，它是一个纯函数。也就是说，只要是同样的输入，必定得到同样的输出。由于 Reducer 是纯函数，就可以保证同样的State，必定得到同样的 View。但也正因为这一点，Reducer 函数里面不能改变 State，必须返回一个全新的对象。

```js
  // State 是一个对象
  function reducer(state, action) {
    return Object.assign({}, state, { thingToChange });
    // 或者
    return { ...state, ...newState };
  }
  // State 是一个数组
  function reducer(state, action) {
    return [...state, newItem];
  }
```

## React-Redux

如果只使用redux，那么流程是这样的：

> component --> dispatch(action) --> reducer --> subscribe --> getState --> component

用了react-redux之后流程是这样的：

> component --> actionCreator(data) --> reducer --> component

store的三大功能：dispatch，subscribe，getState都不需要手动来写了。react-redux帮我们做了这些，同时它提供了两个好基友Provider和connect。

### Provider

<Provider store> 使组件层级中的 connect() 方法都能够获得 Redux store。正常情况下，你的根组件应该嵌套在 <Provider> 中才能使用 connect() 方法。

```jsx
  <Provider store={store}>
      {router(hashHistory)}
  </Provider>
```

### connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

连接 React 组件与 Redux store。

> [mapStateToProps(state, [ownProps]): stateProps] (Function): 如果定义该参数，组件将会监听 Redux store 的变化。任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用。该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并。如果你省略了这个参数，你的组件将不会监听 Redux store。

> [mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function): 如果传递的是一个对象，那么每个定义在该对象的函数都将被当作 Redux action creator，对象所定义的方法名将作为属性名；每个方法将返回一个新的函数，函数中dispatch方法会将action creator的返回值作为参数执行。这些属性会被合并到组件的 props 中。如果传递的是一个函数，该函数将接收一个 dispatch 函数，然后由你来决定如何返回一个对象，这个对象通过 dispatch 函数与 action creator 以某种方式绑定在一起（提示：你也许会用到 Redux 的辅助函数 bindActionCreators()）。

```js
  connect(
    state => ({
        citys: state.getCity
    }),
    dispatch => ({ 
        actions: bindActionCreators(actions, dispatch) 
    })
  )(Home)
```

### 中间件和异步操作

***中间件实际上就是对store.dispatch()进行改造***  

![Image text](https://github.com/zhangleinice/-/blob/master/public/imgs/middleware.jpg)

用户发出 Action，Reducer 函数算出新的 State，View 重新渲染。<br/>但是，一个关键问题没有解决：异步操作怎么办？Action 发出以后，Reducer 立即算出 State，这叫做同步；Action 发出以后，过一段时间再执行 Reducer，这就是异步。

Redux本身只能处理同步的Action，但可以通过中间件来拦截处理其它类型的action

异步Action

middleware：增强dispatch，简化actionCreator。

* redux-thunk : 允许return一个function

```js
  // actionCreator
  export const city = data => {
    return (dispatch) => {
          api.Cityinside()
              .then(res => {
                  dispatch ({
                      type: CITY_SUCCESS,
                      payload: res.data
                  })
              })
              .catch(err => {
                  dispatch ({
                      type: CITY_FAIL,
                      error: err
                  })
              })
      }
  }
```

* redux-promise : 简化action

```js
  // actionCreator
  export const city = data => {
    return {
        type: CITY,
        payload: api.Cityinside()
    }
  }
  // reducer
  switch(action.type) {
    if(action.payload.status === 200) {
      return {
          ...state,
          city: action.payload
        }
      }else {
          console.log('服务器错误！');
          return state;
          }
      default :
          return state;
  }
```

## middleware
1,applyMiddleware  
```js
    function applyMiddleware(...middlewares){
        return function(createStore){
            return function(reducer){
                //引入store
                let store = createStore(reducer);
                let dispatch = store.dispatch;
                let middlewareAPI = {
                    getState:store.getState,
                    // 对dispatch进行包装
                    dispatch:action=>dispatch(action)
                }
                //每个中间件都是这种模型  ({ getState, dispatch }) => next => action
                chain = middlewares.map(middleware => middleware(middleAPI));
                dispatch = compose(...chain)(store.dispatch);
                // dispatch被改装后，返回store
                return{...store, dispatch};
            }
        }
    }
```
2,每个中间件都是这种模型  ({ getState, dispatch }) => next => action,next相当于store.dispatch  

3,redux-logger
```js
    // 记录所有被发起的action和新的state
    let next = store.dispatch;
    store.dispatch = function(action){
        console.log('老状态 ',store.getState());
        next(action);
        console.log('新状态 ',store.getState());
    }

    let logger = function({ getState, dispatch }){
        // 这里的next可以理解为store.dispath,本质上就是调用 middleware 链中下一个 middleware 的 dispatch。
        return function(next){
            return function(action){
                console.log('老状态1 ',getState());
                next(action);//派发动作
                console.log('新状态1 ',getState());
            }
        }
    }
    // 高逼格写法
    let logger = ({ getState, dispatch }) => next => action => {
        console.log('老状态1 ',getState());
        next(action)
        console.log('新状态1 ',getState());
    }
```
4, redux-thunk允许return function
```js
    // redux-thunk
    export const thunkMiddleware = ({dispatch, getState, extraArgument}) => {
        return next => action => {
            if(typeof action === 'function') {
            return action(dispatch, getState, extraArgument);
            }
            return next(action);
        }
    }
    //action
    export function thunkActionCreator(payload){
        return function(dispatch, getState,extraArgument){
            setTimeout(function(){
                dispatch({type:types.INCREMENT,payload:payload});
            },1000);
        }
    },
```
5，redux-promise  
```js
    let promise = ({dispatch,getState}) => next => action => {
        if(action.then && typeof action.then == 'function'){
            action.then(dispatch);
            // 这里的dispatch就是一个函数，dispatch(action){state:reducer(state,action)};
        }else if(action.payload&& action.payload.then&& typeof action.payload.then == 'function'){
            // 实际上dispatch了promise.then后面的
            action.payload.then(
             result => dispatch({...action,payload: result}),
             error => {
               dispatch({...action,payload: error,error: true})
               return Promise.reject(error)
             }
           )
        }else{
            next(action);
        }
    }
    //action1
    function promiseIncrement(payload){
    //  return {type:types.INCREMENT,payload:payload}  以前是这种写法
        return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({type:types.INCREMENT,payload:payload});
        },1000);
        });
    }
    //action2
    function payloadIncrement(){
        return {
            type:types.INCREMENT,
            payload: new Promise(function(resolve,reject){
                setTimeout(function(){
                    if(Math.random()>.5){
                        resolve(100);
                    }else{
                        reject(-100);
                    }
                },1000)
            })
        }
    }
```






