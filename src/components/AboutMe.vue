<script setup></script>
<template>
	<div class="about-container">
		<div class="flex top-div">
			<img class="img-logo" src="../assets/logo.png" alt="" />
		</div>

		<div>
			<p class="p-style">暱稱:Yan</p>
			<p class="p-style">
				email:
				<a href="mailto:podoyo23@gmail.com">podoyo23@gmail.com</a>
			</p>
			<p class="p-style">
				GitHub:
				<a href="https://github.com/CHENPODO">CHENPODO</a>
			</p>
		</div>
	</div>
</template>

<style>
.about-container {
	margin: 0 80px auto;
	padding: 10px;
	height: fit-content;
}
.p-style {
	font-weight: 700;
}
.top-div {
	background-color: #5384666e;
	padding: 10px;
	margin-bottom: 10px;
}

.img-logo {
	width: 200px;
	height: auto;
	margin-bottom: 20px;
	background-color: white;
	border-radius: 100%;
	margin: 0 auto;
}
</style>
