import { createWebHistory, createRouter } from 'vue-router';
import ActivityI from './views/activity-1.vue';
import ActivityII from './views/activity-2.vue';
import ActivityIII from './views/activity-3.vue';

const routes = [
  {
    path: '/',
    name: 'ActivityI',
    component: ActivityI
  },
  {
    path: '/activity-2',
    name: 'ActivityII',
    component: ActivityII
  },
  {
    path: '/activity-3',
    name: 'ActivityIII',
    component: ActivityIII
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;