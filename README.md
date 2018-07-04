# 基于react + redux的项目搭建个人总结

## 项目运行

  ```sh
  git clone git@github.com:zhangleinice/-.git  
  npm install
  npm run dev
  ```

## 技术栈 

react + redux + webpack + react-router + ES6/7/8 

## Redux

![Image text](https://github.com/zhangleinice/-/blob/master/public/imgs/redux.jpg)

### redux主要由三部分组成：store，reducer，action。

### store:是一个对象，它有四个主要的方法：

### 1 dispatch:

> 用于action的分发——在createStore中可以用middleware中间件对dispatch进行改造，比如当action传入dispatch会立即触发reducer，有些时候我们不希望它立即触发，而是等待异步操作完成之后再触发，这时候用redux-thunk对dispatch进行改造，以前只能传入一个对象，改造完成后可以传入一个函数，在这个函数里我们手动dispatch一个action对象，这个过程是可控的，就实现了异步。

### 2 subscribe:

> 监听state的变化,当我们需要知道state是否变化时可以调用，它返回一个函数，调用这个返回的函数可以注销监听。 let unsubscribe = store.subscribe(() => {console.log('state发生了变化')})

### 3 getState:

> 获取store中的state——当我们用action触发reducer改变了state时，需要再拿到新的state里的数据，毕竟数据才是我们想要的。利用subscribe监听到state发生变化后调用它来获取新的state数据。

### 4 replaceReducer:

> 替换reducer，改变state修改的逻辑。

### action 

> 可以这样理解，Action 描述当前发生的事情。改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store。action是一个对象，其中type属性是必须的，同时可以传入一些数据。action可以用actionCreactor进行创造。dispatch就是把action对象发送出去。

### reducer

> Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。

## React-Redux

如果只使用redux，那么流程是这样的：

> component --> dispatch(action) --> reducer --> subscribe --> getState --> component

用了react-redux之后流程是这样的：

> component --> actionCreator(data) --> reducer --> component

* store的三大功能：dispatch，subscribe，getState都不需要手动来写了。react-redux帮我们做了这些，同时它提供了两个好基友Provider和connect。

### Provider

* <Provider store> 使组件层级中的 connect() 方法都能够获得 Redux store。正常情况下，你的根组件应该嵌套在 <Provider> 中才能使用 connect() 方法。

```jsx
  <Provider store={store}>
      {router(hashHistory)}
  </Provider>
```

### connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

* 连接 React 组件与 Redux store。

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



## src：

__公共组件__


### 7.3 vendor/react-app-init

- 页面启动工具。封装了react，react-redux，react-router和快照和异步action中间件。