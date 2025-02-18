<template>
	<view v-for="(item,index) in 10" :key="index">
		<view class="aaa">
			下标{{index}} - 元素{{item}}
		</view>
	</view>
	
	<view v-for="item in students" :key="item.id">
		id:{{item.id}}  - 姓名：{{item.name}} - 成绩：{{item.score}}
	</view>
	
	<!-- v-for配合v-if的用法
	
	由于v-if比v-for的优先级更高，所以如果二者需要搭配使用
	就需要先包装一层<template>使用v-for，在其内部再使用v-if
	
	-->
	<template v-for="item in students" :key="item.id">
		<view class="aaa" v-if="item.score>90">
		id：{{item.id}} - 姓名:{{item.name}} - 成绩：{{item.score}}
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
</script>

<style>
	.aaa{
		background-color: lightgreen;
		text-align: center;
		margin: 20rpx;
		padding: 20rpx;
	}
</style>
