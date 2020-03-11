// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './icon/iconfont.css'
import store from './store/index'
import wangeditor from 'wangeditor'
Vue.prototype.bus=new Vue();
Vue.config.productionTip = false
Vue.use(ElementUI,wangeditor)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
// 跳转页面默认出现在顶部
router.afterEach((to,from, next) => {

  window.scrollTo(0,0)

})
// 跳转页面默认出现在顶部
