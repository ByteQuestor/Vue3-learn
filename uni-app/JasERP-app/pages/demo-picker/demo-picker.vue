<template>
	<!--https://zh.uniapp.dcloud.io/component/picker.html-->
	<view>
		<picker mode="selector" name="major" @change="getIndex" :range="rangeList">选择专业</picker>
		<view class="">
			{{rangeList[index]}}
		</view>
		<picker mode="date" name="date" @change="getDate">选择日期</picker>
		<view class="">
			{{date}}
		</view>
		<picker mode="time" name="time" @change="getTime">选择日期</picker>
		<view class="">
			{{time}}
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	let index = ref()
	let date = ref()
	let time = ref()
	let rangeList = ["计算机","会计","大数据","土木工程"]
	function getIndex(event){
		console.log(event.detail.vue)
		console.log(rangeList[event.detail.value])
		index.value = event.detail.value
	}
	function getDate(event){
		console.log(event.detail.value)
		date.value = event.detail.value
	}
	function getTime(event){
		console.log(event.detail.value)
		time.value = event.detail.value
	}
</script>

<style>
	       
</style>
