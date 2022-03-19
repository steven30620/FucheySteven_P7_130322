import { createRouter, createWebHashHistory } from "vue-router";
import RegisterView from "../views/RegisterView.vue";
import MainPageView from "../views/PublicationPageView.vue";

const routes = [
	{
		path: "/",
		name: "register",
		component: RegisterView,
	},

	{
		path: "/publicationPage",
		name: "publicationPage",
		component: MainPageView,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
