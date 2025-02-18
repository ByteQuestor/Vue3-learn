<template>
	<view>
		<input class="ipt" type="text" v-model="name" placeholder="请输入姓名"/>
	</view>
	<view class="">
		预览：{{name}}
	</view>
	<view>
		<input class="ipt" type="text" v-model="age" placeholder="请输入年龄"/>
	</view>
	<view class="">
		预览：{{age}}
	</view>
	<view>
		<input class="ipt" type="text" v-model="people.name"/>
	</view>
	
	
	<view class="">
		监听对象：{{people}}
	</view>
</template>

<script setup>
	import {ref,watch, watchEffect} from 'vue';
	let name = ref("")
	let age = ref()
	let people = ref({
		name: '李四',
		age:26
	})
	
	//监听多个值（不推荐，一般是分开写通俗易懂）
	watch([name,age],([newName,newAge],[oldName,oldAge])=>{
		console.log(newName,newAge)
		console.log(oldName.oldAge)
	})
	watch(name,(newName,oldName)=>{
		console.log('新值：' + newName)
		console.log('旧值：' + oldName)
	})
	
	//监听对象里面的属性
	watch(()=>people.value.name,(newName)=>{
		console.log('新值：' + newName)
		// console.log('旧值：' + oldName)
		
	})
	
	//深度监听
	//即只需要监听对象，而不需要监听具体某个属性，只要任意属性发生变化就触发监听
	//{deep:true}常用于数据结构比较深的
	//immediate：true即立即执行一下回调
	watch(()=>people,(newName)=>{
		console.log('新值：' + newName.value.name)
		// console.log('旧值：' + oldName)
		
	},{deep:true,immediate:true})
	
	
	//watchEffect
	/*
		用于监听响应式数据，但是想people这种对象就监听不到深层次了
		其实就相当于watch自带了一个immediate:true属性
	*/
	watchEffect(()=>{
		console.log(name.value)
		console.log(age.value)
		console.log(people)
	})
	
	
	/*
		computed和watchd的区别：
			computed是接收多个生产一个新的数据，比如对数据过滤、排序、格式化操作
				而且computed内的函数必须要有返回值
			watch是在数据变化时进行异步操作或复杂的逻辑，比如在数据发生变化时发生请求
				而watch内的函数不需要有返回值
		
	
	*/
</script>

<style>
	 .ipt{
	 	margin: 20rpx;
	 	border: 2rpx solid royalblue;
	 	padding: 20rpx;
	 }      
</style>
