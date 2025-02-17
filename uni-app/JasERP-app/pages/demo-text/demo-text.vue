<template>
	<view class="aaa" style="background-color: indianred;">
		111
		<text class="bbb">这是text标签，不会自动换行</text>
		<view>这是view标签，强行占一行</view>
	</view>
	<view class="aaa">
		222
	</view>
	<view class="aaa">
		333
	</view>
</template>

<script setup>
	
</script>

<style>
	.aaa{
		background-color: greenyellow;
		margin: 20rpx 20rpx;
		padding: 20rpx;
		text-align: center;
	}
	.bbb{
		background-color: brown;
	}
</style>
