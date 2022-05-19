import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/Main";
import Profile from "../pages/Profile";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/challenge/2022',
        component: Main
    },
    {
        path: '/books',
        component: Main
    },
    {
        path: '/feed',
        component: Main
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;
