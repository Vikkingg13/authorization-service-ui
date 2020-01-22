import Vue from "vue"
import router from './router'
import App from "./App.vue"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/main.css"

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  "render": h => h(App),
}).$mount("#app");