import Data from '../views/Data.vue';
import Page from '../views/Page.vue';
import Table from '../views/Table.vue';
import NotFound from '../views/NotFound.vue';

export const routes = [
    {
        path: "/",
        redirect: '/data'
    },
    {
        path: '/data',
        name: 'data',
        component: Data,
        meta: {
            requiresAuth: false,
            title: 'Company Data'
        }
    },
    {
        path: '/page',
        name: 'page',
        component: Page,
        meta: {
            requiresAuth: false,
            title: 'Company Page'
        }
    },
    {
        path: '/table',
        name: 'table',
        component: Table,
        meta: {
            requiresAuth: false,
            title: 'Company Table'
        }
    },
    {
        path: '/not-found',
        name: 'not-found',
        component: NotFound,
        meta: {
            requiresAuth: false,
            title: 'Not Found'
        }
    },
    {
        path: '*',
        redirect: '/not-found'
    }
]