import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/calendar",
			name: "calendar",
			component: () => import("../components/CalendarView.vue"),
		},
		{
			path: "/aboutMe",
			name: "AboutMe",
			component: () => import("../components/AboutMe.vue"),
		},
	],
})

export default router
