<template>
	<view v-for="item in 100">
		{{item}}
	</view>
</template>

<script setup>
	// import {onPullDownRefresh,onReachBottom} from "@dcloudio/uni-app"
	onPullDownRefresh(()=>{
		console.log('下拉刷新，请求数据')
		//停止刷新，也就是只刷新1秒
		setTimeout(function(){
			uni.stopPullDownRefresh();
		},1000)
	})
	
	onReachBottom(()=>{
		console.log("执行了触底加载")
	})
</script>

<style>
	       
</style>
