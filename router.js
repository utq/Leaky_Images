import Vue from 'vue'
import Router from 'vue-router'
import singleAttack from './components/singleAttack.vue'
import multiAttackWP from './components/multiAttackWP.vue'
import multiAttackOD from './components/multiAttackOD.vue'
import multiService from './components/multiService.vue'
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
      path: '/multiAttackWP',
      name: 'multiAttackWP',
      component: multiAttackWP
    },
    {
      path: '/multiAttackOD',
      name: 'multiAttackOD',
      component: multiAttackOD
    },
    {
      path: '/multiService',
      name: 'multiService',
      component: multiService
    },
    {
      path: '/how',
      name: 'how',
      component: how
    }
  ]
})
