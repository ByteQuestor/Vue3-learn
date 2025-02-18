<template>
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
</script>

<style>
	       
</style>
