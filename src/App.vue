<script setup>
import CalendarView from "./components/CalendarView.vue"
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
	<div class="p-6">
		<RouterLink to="/" class="navbar p-3 rounded text-gray-800 hover:bg-blue-200 transition" active-class="bg-blue-300">首頁</RouterLink>
		<RouterLink to="/calendar" class="navbar mr-5 p-3 rounded text-gray-800 hover:bg-blue-200 transition" active-class="bg-blue-300">日曆</RouterLink>
		<RouterLink to="/aboutMe" class="navbar mr-5 p-3 rounded text-gray-800 hover:bg-blue-200 transition" active-class="bg-blue-300">關於我們</RouterLink>

		<!-- <a href="#"><i class="fa-solid fa-bars text-2xl"></i></a> -->

		<div class="p-5 max-w-full">
			<div class="border-b-2 border-gray-300">
				<div class="h-5 rounded bg-gray-50"></div>
			</div>
		</div>
	</div>
	<RouterView></RouterView>
</template>

<style>
.navbar {
	margin-left: 5px;
}
</style>
