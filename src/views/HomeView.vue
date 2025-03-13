<script setup>
import router from "@/router"

const ctaBtn = () => {
	//push 路由 到日曆頁面
	router.push("/calendar")
}
const aboutBtn = () => {
	//push 路由 到關於我們頁面
	router.push("/aboutMe")
}
</script>

<template>
	<div class="p-2">
		<div class="homeDiv">
			<h1 class="title">選擇你的日常規劃!</h1>
			<!-- 加入一個插圖 -->
			<p class="subtitle">在這裡，你可以管理並規劃你的每一天，打造屬於你的完美日程！</p>
			<!-- 呼叫行動按鈕 -->
			<button @click="ctaBtn" class="cta-btn">開始規劃</button>
			<!-- 關於我們按鈕 -->
			<button @click="aboutBtn" class="cta-btn">關於我們</button>
		</div>
	</div>
</template>

<style>
.homeDiv {
	max-width: 900px;
	padding: 20px;
	background: linear-gradient(to left, #67806a, #94be99); /* 漸層背景 */
	margin: 0 auto;
	border-radius: 10px; /* 圓角效果 */
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 增加陰影 */
	text-align: center; /* 使內容居中 */
	transition: transform 0.5s ease-in-out;
}
.homeDiv:hover {
	scale: 1.05;
	cursor: pointer;
}

.title {
	font-size: 32px;
	color: rgba(255, 255, 255, 0.968);
	font-weight: 700;
	margin-bottom: 20px;
}

.title::after {
	content: "";
	display: block;
	margin: 0 auto;
	width: 300px;
	height: 3px;
	background-color: white;
	border-radius: 3px;
}

.subtitle {
	font-size: 18px;
	color: white;
	margin-bottom: 30px;
}

.cta-btn {
	padding: 12px 24px;
	margin-right: 10px;
	background-color: #638466;
	color: white;
	font-size: 16px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s;
}

.cta-btn:hover {
	background-color: #768e78e8;
}
</style>
