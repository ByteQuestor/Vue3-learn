<template>
	<view class="nav" @click="toDemo">
		跳转到tabbar界面
	</view>
</template>

<script setup>
	//无法跳转，点击没反应
	// function toDemo(){
	// 	uni.navigateTo({
	// 		url:'pages/demo7-2-tabbar/demo7-2-tabbar'
	// 	})
	// }
	
	function toDemo(){
		uni.switchTab({
			url:'/pages/demo7-2-tabbar/demo7-2-tabbar'
		})
	}
	
	
</script>

<style>
	       .nav{
	       	font-size: 50rpx;
	       	background-color: aquamarine;
	       	padding: 20rpx;
	       	margin: 20rpx;
	       }
</style>
