import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/font/font.css'
import './assets/iconfont/iconfont'
import wx from 'weixin-js-sdk'
import IconSvg from '@/components/icon'

import animated from 'animate.css'

createApp(App)
  .use(store)
  .use(router)
  .use(animated)
  .use(wx)
  .use(IconSvg)
  .mount("#app");
