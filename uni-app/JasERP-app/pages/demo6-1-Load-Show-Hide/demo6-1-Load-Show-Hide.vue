<template>
	<view>
		{{time}}
	</view>
	<!-- 不重定向会返回当前界面 -->
	<navigator url="/pages/demo5-3-ref/demo5-3-ref" class="nav">跳转界面</navigator>
	<!--重定向后会返回主界面，而且当前界面会执行unLoad-->
	<navigator url="/pages/demo5-3-ref/demo5-3-ref" open-type="redirect" class="nav">跳转界面并重定向</navigator>
	<!--重定向后会返回主界面，而且当前界面会执行unLoad-->
	<navigator url="/pages/demo6-2/demo6-2?name=辣条&id=1234" open-type="navigate" class="nav">跳转界面并携带参数</navigator>
</template>

<script setup>
	import { ref } from 'vue'
	import {onLoad,onShow,onHide,onUnload} from '@dcloudio/uni-app'
	let time = ref(0)
	let interval = setInterval(()=>{
		time.value++
	},100)
	
	onLoad(()=>{
		console.log('加载界面')
	})
	onShow(()=>{
		console.log("onShow")
		interval = setInterval(()=>{
			time.value++
		},100)
	})
	onHide(()=>{
		clearInterval(interval)
		console.log('隐藏')
	})
	onUnload(()=>{
		console.log("执行了unload")
	})
</script>

<style>
.nav{
	font-size: 50rpx;
	background-color: aquamarine;
	padding: 20rpx;
	margin: 20rpx;
}
</style>
