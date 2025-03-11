<script setup>
import { ref, computed } from "vue"
// 定義星期標頭，使用v-for迴圈顯示
const weekDay = ["日", "一", "二", "三", "四", "五", "六"]
// 使用響應式數據 ref 建立 currentYears 變數 跟 currentMonth
const currentYear = ref(new Date().getFullYear())
//月份計算是從0開始，所以要加1
const currentMonth = ref(new Date().getMonth()) //0~11

//取得當月的天數，使用計算屬性
const daysInMonth = computed(() => {
	//new date(年,月,日) 月份是從0開始，所以要加1
	const days = new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
	// 產生一個長度為days的陣列，並填入1~days的數字, 用來顯示當月的日期
	return Array.from({ length: days }, (_, i) => i + 1)
})

//確認當月第一天是星期幾?
//new Date(年, 月, 1)：獲取當月的第一天
//.getDay()：回傳星期幾（0 = 星期日，1 = 星期一，依此類推）

const firstDayOfMonth = computed(() => {
	return new Date(currentYear.value, currentMonth.value, 1).getDay()
})

//
const calendarDays = computed(() => {
	const days = daysInMonth.value
	const emptyDays = Array(firstDayOfMonth.value).fill("") //產生 N 個空白格子，N 是這個月的第一天是星期幾
	return [...emptyDays, ...days] // 把空白格子跟日期合併
})
//[days, emptyDays] 這樣寫會變成 巢狀陣列，不是一個完整的展開陣列。
//正確的做法應該使用 展開運算子 (...)，讓它們合併成 同一層陣列。

const changeMonth = (num) => {
	console.log("changeMonth 被點擊了")
	currentMonth.value += num //增加或減少月份

	if (currentMonth.value < 0) {
		//如果月份變成0，代表要回到上一年
		currentMonth.value = 11 // 11月 = 12月
		currentYear.value -= 1
	} else if (currentMonth.value > 11) {
		//如果月份變成13，代表要回到下一年
		currentMonth.value = 0 // 0 = 1月
		currentYear.value += 1
	}
}

//取得今日日期
const today = new Date()
//檢查「某一天」是否為「今天」
const isToday = (day) => {
	if (currentYear.value !== today.getFullYear()) {
		return false
	}
	if (currentMonth.value !== today.getMonth()) {
		return false
	}
	if (day !== today.getDate()) {
		return false
	}
	return true
}
console.log(isToday(1)) // 這會印出 `false`（假設今天不是 1 號）
console.log(isToday(new Date().getDate())) // 這應該會印出 `true`
</script>

<template>
	<div class="p-6 shadows calendar-container">
		<!-- 月份切換 -->
		<div class="flex justify-between">
			<button @click="changeMonth(-1)" class="bottom-line pl-3 pr-3 font-extrabold bg-gray-50 cursor-pointer hover:bg-gray-200">
				<i class="fa-solid fa-arrow-left"></i>
			</button>
			<span class="p-2 bg-gray-100 rounded">{{ currentYear }}年{{ currentMonth + 1 }}月</span>
			<button @click="changeMonth(1)" class="bottom-line pl-3 pr-3 bg-gray-50 cursor-pointer rounded hover:bg-gray-200">
				<i class="fa-solid fa-arrow-right"></i>
			</button>
		</div>

		<!-- 星期標頭 -->
		<div>
			<div class="grid grid-cols-7 pt-7 border-gray-300">
				<div class="bottom-line p-2 text-center font-extrabold" v-for="day in weekDay" :key="day">{{ day }}</div>
			</div>
			<!-- 日期格子 -->
			<div class="grid grid-cols-7 grid-rows-6 text-center">
				<div class="p-5 h-30" v-for="(day, index) in calendarDays" :key="index">
					<span v-if="day" :class="{ 'bg-blue-200 text-white rounded-full px-1.5 py-1': isToday(day) }">{{ day }}</span>
					<!-- 只有非空白格子才顯示數字 -->
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.calendar-container {
	max-width: 1000px;
	margin: 0 auto;
}
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
