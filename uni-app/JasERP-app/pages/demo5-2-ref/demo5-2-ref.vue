<template>
	<view>
		
	</view>
	<view :style="{width:'300rpx',height: height+'px',backgroundColor:'red'}">
		v-bind指令
	</view>
	<view>
		{{height}}
	</view>
	<view>
		{{name}}
	</view>
</template>

<script setup>
	import {ref} from "vue"
	let height = ref(300)
	let name = ref('李四')
	
	setInterval(()=>{
		height.value = height.value + 10
		name.value = name.value + '123'
		console.log(height.value)
	},1000)
</script>

<style>
	       
</style>
