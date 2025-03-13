<script setup>
import { defineProps, watch, ref, defineExpose, onMounted } from "vue"

// 控制筆記視窗顯示與隱藏
const isShow = ref(false)

// 接收父組件傳來的資料
const { title, content, date } = defineProps({
	title: String, // 筆記標題
	content: String, // 筆記內容
	date: String, // 日期，用來識別當天的筆記
})

// 打開與關閉筆記視窗
const openNote = () => {
	isShow.value = true
}
const closeNote = () => {
	isShow.value = false
}
// 使用 `ref` 創建一個可編輯的內容
const editNote = ref(content)

// 儲存修改的筆記內容到 localStorage
const saveEditNote = () => {
	console.log("這是編輯後", editNote.value)
	localStorage.setItem(`note-${date}`, editNote.value)
	closeNote() //關閉
}
// 頁面載入時讀取 localStorage 中的筆記
onMounted(() => {
	const saveNote = localStorage.getItem(`note-${date}`)
	if (saveNote) {
		editNote.value = saveNote // 讀取並顯示儲存的筆記
	}
})
watch(
	() => date,
	(newDate) => {
		const saveNote = localStorage.getItem(`note-${date}`)
		if (saveNote) {
			editNote.value = saveNote // 讀取並顯示儲存的筆記
		} else {
			editNote.value = "" //如果沒有儲存過筆記，清空內容
		}
	}
)
// 讓父組件可以調用 `openNote`
defineExpose({ openNote })
</script>

<template>
	<transition name="fade">
		<!-- 當 isShow 為 true 時，顯示筆記 -->
		<div v-if="isShow" class="note-overlay">
			<div class="note-content">
				<h2 class="note-title">{{ title }}</h2>
				<!-- 可編輯的內容 -->
				<textarea v-model="editNote" class="note-text h-30 w-full" />
				<!-- 儲存和關閉按鈕 -->
				<div>
					<button @click="saveEditNote" class="save-btn">存檔</button>
					<button @click="closeNote" class="close-btn">關閉</button>
				</div>
			</div>
		</div>
	</transition>
</template>

<style>
/* 背景遮罩 */
.note-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3); /* 提高透明度 */
	display: flex;
	justify-content: center;
	align-items: center;
}

/* 筆記視窗 */
.note-content {
	background-color: white;
	border-radius: 12px;
	padding: 24px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	max-width: 80%;
	text-align: center;
}

/* 標題樣式 */
.note-title {
	font-size: 20px;
	margin-bottom: 12px;
}

/* 內容樣式 */
.note-text {
	font-size: 16px;
	margin-bottom: 20px;
	color: #333;
}
/* 存檔按鈕 */
.save-btn {
	padding: 6px 12px;
	background-color: #4caf50;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	margin-right: 10px;
}
/* 關閉按鈕 */
.close-btn {
	padding: 6px 12px;
	background-color: #f44336;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}
.close-btn:hover {
	background-color: #d32f2f;
}

/* Vue Transition 動畫 */
.fade-enter-active,
.fade-leave-active {
	transition:
		opacity 0.3s ease-in-out,
		transform 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: scale(0.8);
}
.fade-enter-to,
.fade-leave-from {
	opacity: 1;
	transform: scale(1);
}
</style>
