import { createRouter, createWebHashHistory } from "vue-router";
import RegisterView from "../views/RegisterView.vue";
import MainPageView from "../views/PublicationPageView.vue";
// import SettingsView from "../views/SettingsView.vue";

const routes = [
	{
		path: "/",
		name: "register",
		component: RegisterView,
	},

	{
		path: "/publication",
		name: "publicationPage",
		component: MainPageView,
	},

	// {
	// 	path: "/settings",
	// 	name: "settingPage",
	// 	component: SettingsView,
	// },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

router.beforeEach(async (to, from, next) => {
	const token = localStorage.getItem("jwt");

	if (!token && to.name !== "register") {
		return { name: "register" };
	}
	if (token && to.name == "register") {
		return false;
	}

	next();
});

export default router;
