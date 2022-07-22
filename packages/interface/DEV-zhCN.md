# 二次开发说明

## 重点依赖

``` json5
{
  "dependencies": {
    // GraphQL客户端，方便集成GraphQL服务器
    "@apollo/client": "^3.6.5",
    // 自托管字体库, 解决网络字体加载问题
    "@fontsource/inter": "^4.5.10",  
    // 完全无样式、完全可访问的 UI 组件，旨在与 Tailwind CSS 完美集成。
    "@headlessui/react": "^1.6.4",
    // 一组450 + 免费的 MIT 授权的高质量 SVG 图标，供您在 Web 项目中使用。可以作为基本的 SVG 图标，也可以通过第一方的 React 和 Vue 库获得。
    "@heroicons/react": "^1.0.6",
    // 为什么要浪费 时间再造 用户界面组件？ 用于在 React 中构建高质量设计系统和 Web 应用程序的无样式、可访问组件
    "@radix-ui/react-dialog": "^0.1.7",
    "@radix-ui/react-dropdown-menu": "^0.1.6",
    "@radix-ui/react-icons": "^1.1.1",
    "@radix-ui/react-progress": "^0.1.4",
    "@radix-ui/react-slider": "^0.1.4",
    "@sd/client": "workspace:*",
    "@sd/core": "workspace:*",
    "@sd/ui": "workspace:*",
    // vitejs react 插件
    "@vitejs/plugin-react": "^1.3.2",
    // css 自动前缀补全 （使用 Can I Use 网站中的值解析 CSS 并将供应商前缀添加到 CSS 规则）
    "autoprefixer": "^10.4.7",
    // 将字节或八位字节值（例如 34565346）转换为人类可读的字符串（'34.6 MB'）。在公制或 IEC 单位之间进行选择。
    "byte-size": "^8.1.0",
    // 一个小型 (228B) 实用程序，用于有条件地构造 className 字符串
    "clsx": "^1.1.1",
    // 状态管理库：更新复杂对象的噩梦,只需修改当前树即可创建下一个不可变状态树；[immer —— 提高React开发效率的神器](https://zhuanlan.zhihu.com/p/146773995)
    "immer": "^9.0.14",
    // 状态管理库：原子状态管理，用于精确渲染和状态管理，提高性能。
    "jotai": "^1.7.0",
    // 模块化方法集合
    "lodash": "^4.17.21",
    // 日期处理类库，用于解析、检验、操作、以及显示日期
    "moment": "^2.29.3",
    // Phosphor 是一个灵活的图标系列，用于界面、图表、演示。[在 phosphoicons.com 上探索我们所有的图标。](https://phosphoricons.com/)
    "phosphor-react": "^1.4.1",
    // 将字节转换为人类可读字符串：1337→1.34 kb。在公制或 IEC 单位之间进行选择。
    "pretty-bytes": "^6.0.0",
    // react 框架核心库
    "react": "^18.1.0",
    // 一个围绕 CountUp.js 的可配置 React 组件包装器。用于显示数字和数字的变化。
    "react-countup": "^6.2.0",
    // 用于处理 DOM 的 React 包
    "react-dom": "^18.1.0",
    // 用于处理拖放区域的 React 包
    "react-dropzone": "^14.2.1",
    // 用于显示错误边界组件
    "react-error-boundary": "^3.1.4",
    // 用于在组件中使用键盘快捷键的 React 钩子
    "react-hotkeys-hook": "^3.4.6",
    // 用于显示 javascript 数组和 JSON 对象的交互式React组件
    "react-json-view": "^1.21.3",
    // 用于展示图标加载特效的 React 组件
    "react-loading-icons": "^1.1.0",
    // 用于展示骨架屏的 React 组件
    "react-loading-skeleton": "^3.1.0",
    // Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。
    "react-portal": "^4.2.2",
    // 用于在 React 中管理、缓存和同步异步和远程数据的钩子
    "react-query": "^3.39.1",
    // react 路由管理器
    "react-router": "6.3.0",
    // React Web 应用程序的声明式路由
    "react-router-dom": "6.3.0",
    // 最好的 React 自定义滚动条组件
    "react-scrollbars-custom": "^4.0.27",
    // 用于加载样条模型和动画的包装器
    "react-spline": "^1.2.1",
    // 用于管理转场动画的 React 组件工具集
    "react-transition-group": "^4.4.2",
    // React Virtuoso 是最强大的 React 虚拟列表/表格组件
    "react-virtuoso": "^2.12.1",
    // Essential React 自定义钩子 ⚓ 为你的组件超级充电！包含63个钩子函数
    "rooks": "^5.11.2",
    // CSS 工具框架 tailwindcss
    "tailwindcss": "^3.0.24",
    // 状态管理：是 Redux 的替代品，它提供了一种更加简单的方式来管理状态。
    "zustand": "4.0.0-rc.1"
 },
 "devDependencies": {
    "@types/babel-core": "^6.25.7",
    "@types/byte-size": "^8.1.0",
    "@types/lodash": "^4.14.182",
    "@types/node": "^17.0.36",
    "@types/pretty-bytes": "^5.2.0",
    "@types/react": "^18.0.9",
    "@types/react-dom": "^18.0.5",
    "@types/react-router-dom": "^5.3.3",
    "@types/react-table": "^7.7.12",
    "@types/react-window": "^1.8.5",
    "@types/tailwindcss": "^3.0.10",
    "@vitejs/plugin-react": "^1.3.1",
    "concurrently": "^7.2.1",
    "prettier": "^2.6.2",
    "typescript": "^4.7.2",
    "vite": "^2.9.9",
    "vite-plugin-svgr": "^2.1.0"
 }
}

```
