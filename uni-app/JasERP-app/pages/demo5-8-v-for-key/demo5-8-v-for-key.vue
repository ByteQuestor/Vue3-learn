<template>
	<view v-for="(item,index) in 5" :key="index">
		<view class="aaa">
			下标{{index}} - 元素{{item}}
		</view>
	</view>
	<view v-for="item in students" :key="item.id">
		id:{{item.id}} - 姓名：{{item.name}} - 成绩：{{item.score}}
	</view>
	<!--如果没有这个item.id作为key，那么在删除过程中就无法定位到原先的位置、
	
	删除:key="item.id"  可预览key的作用
	-->
	<template v-for="(item,index) in students" :key="item.id">
		<view class="aaa" v-if="item.score>10">
			<checkbox></checkbox>
			id:{{item.id}} - 姓名：{{item.name}} - 成绩：{{item.score}}
			<text class="bbb" @click="remove(index)">删除</text>
		</view>
	</template>
</template>

<script setup>
	import {ref} from "vue"
	let students = ref([
		{id:1001,name:'李思思',score: 90},
		{id:1002,name:'李四',score: 95},
		{id:1003,name:'王子阳',score: 85},
		{id:1004,name:'刘能',score: 60},
	])
	function remove(index){
		console.log(index)
		students.value.splice(index,1)
	}
</script>

<style>
	.aaa{
		background-color: lightgreen;
		text-align: center;
		margin: 20rpx;
		padding: 20rpx;
	}
	.bbb{
		color: red;
	}
</style>
