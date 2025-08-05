import { createRouter, createWebHistory } from 'vue-router';

// Layouts
const TopBar = () => import('@/ui/layouts/TopBar.vue');
const SideBar = () => import('@/ui/layouts/SideBar.vue');

// Pages
const DashboardPage = () => import('@/views/DashboardPage/DashboardPage.vue');
const HabitsPage = () => import('@/views/HabitsPage/HabitsPage.vue');


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            components: {
                default: DashboardPage,
                topBar: TopBar,
                sideBar: SideBar,
            },
        },
        {
            path: '/habits',
            name: 'habits',
            components: {
                default: HabitsPage,
                topBar: TopBar,
                sideBar: SideBar,
            },
        },
    ]
})

export default router
