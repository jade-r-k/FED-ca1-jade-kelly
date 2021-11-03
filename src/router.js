import Vue from 'vue'
import Router from 'vue-router'

//Pages
import Home from './pages/Home'
import About from './pages/About'
import ViewCountry from './pages/ViewCountry'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        //Home page
        {
            path: '/',
            name: 'home',
            component: Home
        },
        //About page
        {
            path: '/about',
            name: 'about',
            component: About
        },
        //ViewCountry page
        {
            path: '/viewcountry',
            name: 'viewcountry',
            component: ViewCountry
        },
    ]
})