<template>
	<!--v-if和v-show的区别，一句话说就是
	
	如果v-if判断的为假，直接就不会渲染元素
	而v-show如果判断为假，依然会渲染，但是会隐藏元素，为真时显示
	
	-->
	<view v-if="bool">
		性别：男
	</view>
	<view v-else>
		性别：女
	</view>
	<view v-if="day==1">星期一</view>
	<view v-else-if="day==2">星期二</view>
	<view v-else-if="day==3">星期三</view>
	<view v-else-if="day==4">星期四</view>
	<view v-else-if="day==5">星期五</view>
	<view v-else-if="day==6">星期六</view>
	<view v-else-if="day==7">星期七</view>
	<view v-show="true" class="">
		<image src="/static/logo.png"></image>
	</view>
	<view v-show="false" class="">
		<image src="/static/demo-image.png"></image>
	</view>
	
	<template v-if="false">
		<view class="">
			你好
		</view>
		<image src="/static/logo.png"></image>
	</template>
	<template v-else>
		<view class="">
			哈喽
		</view>
		<image src="/static/demo-image.png"></image>
	</template>
</template>

<script setup>
	import {ref} from 'vue'
	let bool = ref(true)
	let day = ref(1)
</script>

<style>
	       
</style>
