import { createRouter, createWebHashHistory } from 'vue-router';
import RegisterView from '../views/RegisterView.vue';
import MainPageView from '../views/PublicationPageView.vue';

const routes = [
	{
		path: '/',
		name: 'register',
		component: RegisterView,
	},

	{
		path: '/publication',
		name: 'publicationPage',
		component: MainPageView,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

//j'utilise vue guard pour rediriger les user en fonctin de si ils ont un token ou non.
router.beforeEach(async (to, from, next) => {
	const token = localStorage.getItem('jwt');

	if (!token && to.name !== 'register') {
		return { name: 'register' };
	}
	if (token && to.name == 'register') {
		return { name: 'register' };
	}

	next();
});

export default router;
