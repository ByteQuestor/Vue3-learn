<template>
	<view>
		获取全局变量
	</view>
	<button type="primary" @click="toDemo">跳转到6-4，并输出修改后的全局变量</button>
</template>

<script setup>
	const app = getApp()
	console.log(app.globalData.userInfo)
	console.log(app.globalData.userNickName)
	app.doSomeThing()
	
	//修改全局变量
	app.globalData.userNickName = '今天是2025-2-18，我正在学uni-app'
	console.log(app.globalData.userNickName)
	
	function toDemo() {
	    uni.navigateTo({
	        url: '/pages/demo6-4-apiTo/demo6-4-apiTo'
	    });
	}
</script>

<style>
	       
</style>
