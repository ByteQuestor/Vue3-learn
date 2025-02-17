<template>
	<view>
		<!--https://uniapp.dcloud.net.cn/component/input.html-->
		<input 
		type="number"
		class="ipt"
		placeholder="请输入内容"
		maxlength="10"
		@input="getValue"
		@confirm="confirm"
		/>
	</view>
</template>

<script setup>
	function getValue(event){
		console.log(event.detail.value)
	}
	function confirm(event){
		console.log(event.detail.value)
	}
</script>

<style>
	.ipt{
		margin: 20rpx;
		border: 2rpx solid royalblue;
		padding: 20rpx;
	}
</style>
