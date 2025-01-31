import { createRouter, createWebHistory } from 'vue-router'
import memory from "@/pages/memory.vue";
import now from "@/pages/now.vue";
import plan from "@/views/now/plan.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/memory',
      name: 'memory',
      component: memory
    },
    {
      path: '/',
      name: 'now',
      component: now
    },
    {
      path: '/plan',
      name: 'plan',
      component: plan
    }

  ]
})

export default router
