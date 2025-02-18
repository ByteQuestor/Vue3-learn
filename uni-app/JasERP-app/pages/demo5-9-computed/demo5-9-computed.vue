<template>
	<view v-for="item in students" :key="item.id">
		id:{{item.id}} - 姓名：{{item.name}} - 成绩：{{item.score}}
	</view>
	<!--
		计算属性与普通方法的区别：
		
		当数据发生变化时，
			如果多个组件用到了同一个计算属性，那么只会执行一次
			而用方法的话，每调用一个方法，就会执行一次方法
			因此：计算属性比较节省资源
		
	-->
	<template v-for="(item,index) in students" :key="item.id">
		<view class="aaa" v-if="item.score>10">
			<checkbox></checkbox>
			id:{{item.id}} - 姓名：{{item.name}} - 成绩：{{item.score}}
			<text class="bbb" @click="remove(index)">删除</text>
		</view>
	</template>
	<view>
		computed属性计算总成绩total：{{total}}
	</view>
	<view>
		方法计算总成绩computedSum()：{{computedSum()}}
	</view>
		
</template>

<script setup>
	import {computed, ref} from "vue"
	let students = ref([
		{id:1001,name:'李思思',score: 90,kemu:"语文"},
		{id:1002,name:'李四',score: 95,kemu:"数学"},
		{id:1003,name:'王子阳',score: 85,kemu:"理综"},
		{id:1004,name:'刘能',score: 60,kemu:"英语"},
	])
	//计算属性
	let total = computed(()=>{
		let sum = 0
		students.value.forEach(item=>{
			sum = item.score +  sum
		})
		return sum
	})
	//方法
	
	function computedSum(){
		let sumScore = 0
		sumScore = 0
		students.value.forEach(item=>{
			sumScore = item.score + sumScore
		})
		return sumScore
	}
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
