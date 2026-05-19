import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
// 引入 antdv-next，playground 只依赖维护更活跃的新包名。
import Antd from 'antdv-next';
import 'antdv-next/dist/reset.css';
// 引入@lmlib/ui
import MyLibUI from '@lmlib/ui';
import '@lmlib/ui/style.css';

const app = createApp(App);
app.use(Antd); // 全局引入antdv组件
app.use(MyLibUI); // 全局引入@lmlib/ui组件
app.use(router);
app.mount('#app');
