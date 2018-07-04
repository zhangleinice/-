# 基于react + redux的项目搭建个人总结

## 开发说明

- 安装构建工具

  ```sh
  npm install
  ```

- 本地运行

  ```sh
  npm run start
  ```
  本地开发访问 `http://localhost:3000`

- 本地构建

  ```sh
  npm run build
  ```

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

## src：

__公共组件__


### 7.3 vendor/react-app-init

- 页面启动工具。封装了react，react-redux，react-router和快照和异步action中间件。