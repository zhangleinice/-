# 基于react + redux的完整项目个人总结

个人博客

## 1 项目代号

admin

## 2 项目入口

`dev` 开发调试环境：<http://localhost:3000>


## 5 开发说明

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

## 6 目录结构

### 资源分类：

- **入口资源**
- **生态模块资源**
- **应用模块化资源**
- **应用非模块化资源**
- **业务公共资源**
- **业务场景资源**

### src：

### dist：


## 7 核心模块说明

### 7.1 app/common/base

### 7.2 app/common/commonent

__公共组件__


### 7.3 vendor/react-app-init

- 页面启动工具。封装了react，react-redux，react-router和快照和异步action中间件。