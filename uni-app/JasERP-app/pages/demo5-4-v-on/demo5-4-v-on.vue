<template>
	<!--两种写法均可-->
	
<!-- 	<view
		style="background-color: aquamarine;padding: 20rpx;"
		v-on:click="toGoodDetail"
	>
	商品：麻辣薯条
	</view> -->
	<view
		style="background-color: aquamarine;padding: 20rpx;"
		@click="toGoodDetail(a)"
	>
	商品：麻辣薯条
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	let a = ref(1)
	
	let lisi = ref({
		name:'李四',
		height:170,
		like:['打篮球','跑步']
	})
	
	function toGoodDetail(event){
		console.log(event)
		uni.showToast({
			title:'点击了薯条'
		})
	}
</script>

<style>
	       
</style>
