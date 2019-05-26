import Data from '../views/Data.vue';
import Page from '../views/Data.vue';
import Table from '../views/Table.vue';
import Toolbar from '../components/Toolbar.vue';
import Breadcrumb from '../components/Breadcrumb.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export const routes = [
    { 
      path: '', 
      components: {
        default: Data,
        'toolbar': Toolbar,
        'breadcrumb': Breadcrumb,
        'navbar': Navbar,
        'footer': Footer
      },
      meta: {
        requiresAuth: false
      }
    },
    { 
      path: '/data', 
      components: {
        default: Data,
        'toolbar': Toolbar,
        'navbar': Navbar,
        'footer': Footer
      },
      meta: {
        requiresAuth: false
      }
    },
    { 
      path: '/page', 
      components: {
        default: Page,
        'toolbar': Toolbar,
        'footer': Footer
      },
      meta: {
        requiresAuth: false
      } 
    },
    { 
        path: '/table', 
        components: {
          default: Table,
          'toolbar': Toolbar,
          'footer': Footer
        },
        meta: {
          requiresAuth: false
        } 
      },
    { 
      path: '*', 
      components: {
        default: Data,
        'toolbar': Toolbar,
        'navbar': Navbar,
        'footer': Footer
      },
      meta: {
        requiresAuth: false
      }
    }
  
  ]