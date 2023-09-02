import { createRouter, createWebHistory } from "vue-router";

import HomeView from '../components/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/results',
            name: 'results',
            component: () => import('../components/ResultsView.vue'),
        },
        {
            path: '/radicals',
            name: 'radicals',
            component: () => import('../components/RadicalView.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../components/AboutView.vue'),
        },
        {
            path: '/similar/:id',
            name: 'similar',
            component: () => import('../components/SimilarView.vue'),
        },
        {
            path: '/spotlight/:id',
            name: 'spotlight',
            component: () => import('../components/SingleView.vue'),
        },
    ],
});

export default router;
