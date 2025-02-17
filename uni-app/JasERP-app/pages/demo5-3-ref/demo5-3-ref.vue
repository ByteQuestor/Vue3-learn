<template>
	<view style="font-size: 40rpx;">
		{{lisi.name}}-{{lisi.height}}-{{lisi.like[0]}}-{{lisi.like[1]}}-{{lisi.like[2]}}-
	</view>
	<view style="font-size: 40rpx;">
		{{a}}
	</view>
</template>

<script setup>
	import {ref} from "vue";
	let a = ref(1)
	let lisi = ref({
		name:'李四',
		height:170,
		like:['打篮球','跑步']
	})
	lisi.value.height = 175
	lisi.value.like.push('乒乓球')
	setInterval(()=>{
		a.value++
		lisi.value.height++
		console.log(lisi.value.height)
	},1000)
</script>

<style>
	       
</style>
