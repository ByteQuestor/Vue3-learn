<template>
	<view>
		<button type="primary" @click="beginTo">跳转界面</button>
	</view>
</template>

<script setup>
	console.log(getCurrentPages())
	function beginTo(){
		uni.navigateTo({
			url:'/pages/demo6-3-scroll/demo6-3-scroll'
		})
	}
</script>

<style>
	       
</style>
