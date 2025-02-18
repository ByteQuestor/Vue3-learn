<template>
	<view class="nav" @click="toDemo">
		跳转到另一个界面
	</view>
</template>

<script setup>
	function toDemo(){
		uni.navigateTo({
			url:'/pages/demo6-2/demo6-2?id=1234&name=王子阳'
		})
	}
	// function toDemo(){
	// 	uni.navigateBack()
	// }
	// function toDemo(){
	// 	//此方法跳转，无法返回上一页
	// 	uni.redirectTo({
	// 		url:'/pages/demo6-2/demo6-2?id=1234&name=王子阳'
	// 	})
	// }
	function reLaunch(){
		uni.reLaunch({
			url:'/pages/demo6-3-scroll/demo6-3-scroll'
		})
	}
	const app = getApp()
	console.log("这里是demo6-4：" + app.globalData.userNickName)
</script>

<style>
	.top{
		position: fixed;
		bottom: 100rpx;
		right: 50rpx;
		background-color: gold;
		width: 60rpx;
		height: 60rpx;
		padding: 60rpx;
		border-radius: 50%;
	} 
	.nav{
		font-size: 50rpx;
		background-color: aquamarine;
		padding: 20rpx;
		margin: 20rpx;
	}
</style>
