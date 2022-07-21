import { createRouter, createWebHashHistory } from 'vue-router';
import system from './modules/system';
import permission from './modules/permission';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta:{
      isShow:false
    }
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
    children:[
      permission,
      system
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '404',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
	let userId = sessionStorage.getItem('userId');
	if(userId) {
		next();
	} else {
		if(to.path == '/login') {
		  	next();
		} else {
			next({path: '/login'});
		}
	}
});


export default router;
