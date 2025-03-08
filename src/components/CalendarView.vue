<script setup>
import { ref, computed } from "vue"
// 定義星期標頭，使用v-for迴圈顯示
const weekDay = ["日", "一", "二", "三", "四", "五", "六"]
// 使用響應式數據 ref 建立 currentYears 變數 跟 currentMonth
const currentYear = ref(new Date().getFullYear())
//月份計算是從0開始，所以要加1
const currentMonth = ref(new Date().getMonth())

//取得當月的天數，使用計算屬性
const daysInMonth = computed(() => {
	//new date(年,月,日) 月份是從0開始，所以要加1
	const days = new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
	// 產生一個長度為days的陣列，並填入1~days的數字, 用來顯示當月的日期
	return Array.from({ length: days }, (_, i) => i + 1)
})
</script>

<template>
	<div class="p-6 shadows">
		<!-- 月份切換 -->
		<div class="flex justify-between">
			<button class="bottom-line pl-3 pr-3 font-extrabold bg-gray-50 cursor-pointer hover:bg-gray-200">
				<i class="fa-solid fa-arrow-left"></i>
			</button>
			<span class="p-2 bg-gray-100 rounded">{{ currentYear }}年{{ currentMonth + 1 }}月</span>
			<button class="bottom-line pl-3 pr-3 bg-gray-50 cursor-pointer rounded hover: bg-gray-200"><i class="fa-solid fa-arrow-right"></i></button>
		</div>

		<!-- 星期標頭 -->
		<div>
			<div class="grid grid-cols-7 pt-7 border-gray-300">
				<div class="bottom-line p-2 text-center font-extrabold" v-for="day in weekDay" :key="day">{{ day }}</div>
			</div>
			<!-- 日期格子 -->
			<div class="grid grid-cols-7 grid-rows-6 text-center">
				<div class="p-5 h-30" v-for="days in daysInMonth" :key="days">{{ days }}</div>
			</div>
		</div>
	</div>
</template>

<style>
div {
	font-weight: 800 !important;
}
.bottom-line {
	position: relative;
	overflow: hidden;
}

.bottom-line::after {
	content: " ";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 0%;
	height: 2px;
	background-color: #5d9b5f;
	transition: width 0.5s ease-in-out;
}
.bottom-line:hover::after {
	width: 95%;
}
</style>
