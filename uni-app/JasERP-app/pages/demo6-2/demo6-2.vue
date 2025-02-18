<template>
	<view class="nav" @click="toDemo">
		返回上一个界面
	</view>
	<view class="nav" @click="reLaunch">
		重加载
	</view>
	<view>
		{{good.name}} --- {{good.id}}
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	import {onLoad} from '@dcloudio/uni-app'
	let good = ref({})
	onLoad((event)=>{
		console.log(event)
		good.value.id = event.id
		good.value.name = event.name
	})
	function toDemo(){
		uni.navigateBack()
	}
	/*
		重加载：就想象为销毁其它界面
		
		unLaunch所有之前的界面，只留指定界面，很少用
		
		注意重加载本界面和其它界面的区别
	*/
   function reLaunch(){
	   uni.reLaunch({
	   	// url:'demo6-2'
		url:'/pages/demo-vue3/demo-vue3'
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
