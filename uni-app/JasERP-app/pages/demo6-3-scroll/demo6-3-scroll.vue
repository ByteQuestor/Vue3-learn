<template>
	<view>
		<view class="" v-for="item in 100">
			{{item}}
		</view>
	</view>
	<view class="top" v-if="show">
		返回顶部
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import {onLoad,onPageScroll} from '@dcloudio/uni-app'
	let good = ref({})
	let show = ref(false)
	onLoad((event)=>{
		console.log(event)
		good.value.id = event.id
		good.value.name = event.name
	})
	onPageScroll((event)=>{
		console.log(event.scrollTop)
		if(event.scrollTop>50){
			show.value = true
		}else{
			show.value = false
		}
	})
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
</style>
