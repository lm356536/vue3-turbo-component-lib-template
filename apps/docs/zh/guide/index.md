# 快速开始

## 介绍

mylib-template 是一个基于 Vue3 的组件库和工具集模板项目，包含以下几个部分：

- UI 组件库：提供常用的 UI 组件
- 工具函数：提供常用的工具函数
- Hooks：提供可复用的组合式函数
- Directives：提供常用的指令

## 构建方式

项目提供两条构建入口：

- `pnpm build`：通过 Turborepo 调度各包自身的构建任务，产物保留在各包的 `dist` 目录。
- `pnpm build:gulp`：通过 `build/gulpfile.ts` 聚合构建 `ui`、`utils`、`hooks`、`directives`，产物统一输出到根目录 `dist/<包名>`。

基础包使用 Rolldown 构建，UI 包使用 tsdown 构建，配置文件统一使用 TypeScript。

## 安装

使用包管理器安装：

::: code-group

```bash [npm]
npm install @lmlib/ui @lmlib/utils @lmlib/hooks @lmlib/directives
```

```bash [yarn]
yarn add @lmlib/ui @lmlib/utils @lmlib/hooks @lmlib/directives
```

```bash [pnpm]
pnpm add @lmlib/ui @lmlib/utils @lmlib/hooks @lmlib/directives
```

```bash [bun]
bun add @lmlib/ui @lmlib/utils @lmlib/hooks @lmlib/directives
```

:::

## 使用

### UI 组件

```ts
// 全局引入
import { createApp } from 'vue';
import UI from '@lmlib/ui';
import '@lmlib/ui/style.css';
const app = createApp(App);
app.use(UI);
//  tsconfig.json 还需要添加以下配置以获得类型提示：
//  "types": ["@lmlib/ui/global.d.ts"]

// 按需引入
import { Button } from '@lmlib/ui';
import '@lmlib/ui/style.css';
const app = createApp(App);
app.use(Button);
```

### 工具函数

```ts
import { isString } from '@lmlib/utils';
console.log(isString('hello')); // true
```

### Hooks

```ts
import { useCounter } from '@lmlib/hooks';
const { count, increment, decrement } = useCounter();
```

### 指令

```ts
import { vFocus } from '@lmlib/directives';
// 全局引入
app.directive('focus', vFocus);

// 按需引入
import { vFocus } from '@lmlib/directives';
app.directive('focus', vFocus);
```
