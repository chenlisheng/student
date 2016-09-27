require('material-design-lite/material.min.js')
require('material-design-lite/material.min.css')
require('material-design-icons/iconfont/material-icons.css')

import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import VueMdl from 'vue-mdl'

import App from './components/App'
import Home from './components/Home'
import Login from './components/Login'

import Header from './components/common/Header'
import Bottom from './components/common/Bottom'

Vue.config.debug = true
Vue.use(Router)
Vue.use(VueMdl)
Vue.use(Resource)

Vue.component('common-header',Header)
Vue.component('common-bottom',Bottom)

let router = new Router({
  history: false
})

router.map({
  '/': {
    component: function (resolve) {
      require(['./components/Home.vue'], resolve)
    }
  }
})


router.start(App, '#app')
