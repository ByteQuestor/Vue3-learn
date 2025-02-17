<template>
	<view>
		<!-- <input type="text" @input="getValue" class="ipt" placeholder="请输入内容"/> -->
		 <!--双向绑定，注意注释掉的部分，就是双向绑定替代的功能-->
		 <!--所以v-model其实就是 @input="getValue" 联合  :value="ipt"-->
		<input type="text" :value="ipt" v-model="ipt" class="ipt" placeholder="请输入内容"/>
		<input type="text" :value="person.age" v-model="person.age" class="ipt" placeholder="请输入内容"/>
		<view class="">
			预览变量
		</view>
		<view style="font-size: 46rpx;">
			{{ipt}}
		</view>
		<view class="">
			预览对象
		</view>
		<view style="font-size: 46rpx;">
			{{person}}
		</view>
	</view>
</template>

<script setup>
	import {ref} from "vue"
	let ipt = ref()
	let person = ref({
		name:'张三',
		age:23
	})
	// function getValue(event){
	// 	console.log(event.detail.value)
	// 	ipt.value = event.detail.value
	// }
</script>

<style>
	.ipt{
		margin: 20rpx;
		border: 2rpx solid royalblue;
		padding: 20rpx;
	}    
</style>
