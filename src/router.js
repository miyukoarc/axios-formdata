import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/main.vue'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        component: Main
    }]
})

export default router