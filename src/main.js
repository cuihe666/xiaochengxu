import Vue from 'vue';
import App from './App';

// 引入vuex
import store from './vuex/store';
// 将store添加到vue原型中，这样在项目中就可以直接使用this.$store.****了
Vue.prototype.$store = store;

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
	...App,
	store
});
app.$mount()
