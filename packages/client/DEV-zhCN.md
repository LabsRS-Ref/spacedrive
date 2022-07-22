# 通讯客户端(Client)

- 客户端是通讯协议的客户端，用于与服务器通讯。

## 重要依赖

``` json5
{
  "dependencies": {
    "@sd/config": "workspace:*",
    "@sd/core": "workspace:*",
    // EventEmitter3 是一个高性能的 EventEmitter。它已经针对各种代码路径进行了微优化，使其成为 Node.js 和浏览器可用的最快 EventEmitter 之一
    "eventemitter3": "^4.0.7",
    // 状态管理库：更新复杂对象的噩梦,只需修改当前树即可创建下一个不可变状态树；[immer —— 提高React开发效率的神器](https://zhuanlan.zhihu.com/p/146773995)
    "immer": "^9.0.14",
    // 用于在 React 中管理、缓存和同步异步和远程数据的钩子
    "react-query": "^3.39.1",
     // 状态管理：是 Redux 的替代品，它提供了一种更加简单的方式来管理状态。
    "zustand": "4.0.0-rc.1"
 },
 "peerDependencies": {
    "react": "^18.0.0",
    "react-query": "^3.34.19"
 }
}
```
