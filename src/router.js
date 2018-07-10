import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './pages/HomePage.vue'
import PostPage from './pages/PostPage.vue'
import AboutPage from './pages/AboutPage.vue'
import ContactPage from './pages/ContactPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/post/:id',
      component: PostPage
    },
    {
      path: '/about',
      component: AboutPage
    },
    {
      path: '/contact',
      component: ContactPage
    }
  ]
})
