import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import About from './pages/About'
import Continent from './pages/Continent'
import ViewCountry from './pages/ViewCountry'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/continent',
            name: 'continent',
            component: Continent
        },
        {
            path: '/viewcountry',
            name: 'viewcountry',
            component: ViewCountry
        },
    ]
})