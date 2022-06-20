import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: ()=> import("../views/Index.vue")
    },
    {
        path: '/login',
        name: 'login',
        component: ()=> import("../views/Login.vue")
    },
    {
        path: '/signup',
        name: 'signup',
        component: ()=> import("../views/Signup.vue")
    },
    {
        path: '/store',
        name: 'store',
        component: ()=> import("../views/Store.vue")
    },
    {
        path: '/template',
        name: 'template',
        component: ()=> import("../views/Template.vue")
    },
    {
        path: '/user/:id',
        name: 'user',
        component: ()=> import("../views/User.vue")
    },
    {
        path: '/verifikasi',
        name: 'verifikasi',
        component: ()=> import("../views/Verifikasi.vue")
    },
    {
        path: '/qna',
        name: 'qna',
        component: ()=> import("../views/QnA.vue")
    }
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

export default router