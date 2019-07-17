import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.axios = axios.create({
    headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
});

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')