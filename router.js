import Vue from 'vue'
import Router from 'vue-router'
import singleAttack from './components/singleAttack.vue'
import multiAttack from './components/multiAttack.vue'
import htmlOnly from './components/htmlOnly.vue'
import how from './components/how.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'singleAttack',
      component: singleAttack
    },
    {
      path: '/multiAttack',
      name: 'multiAttack',
      component: multiAttack
    },
    {
      path: '/htmlOnly',
      name: 'htmlOnly',
      component: htmlOnly
    },
    {
      path: '/how',
      name: 'how',
      component: how
    }
  ]
})
