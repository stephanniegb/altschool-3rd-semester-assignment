import {createWebHistory, createRouter} from 'vue-router'
import LandingPage from '@/pages/LandingPage.vue'
import ProductsPage from '@/pages/ProductsPage.vue'
import LogIn from '@/pages/LogIn.vue'
import SignUp from '@/pages/SignUp.vue'

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage
    },
    {
        path: '/products',
        name: 'ProductsPage',
        component: ProductsPage
    },
    {
        path: '/login',
        name: 'LogIn',
        component: LogIn
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    }
]

const router = createRouter({history: createWebHistory(), routes})
export default router