<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
	<view v-for="item in 100" class="text-area">
		{{item}}
	</view>
</template>

<script setup>
	
	let title = "nihao"
	
	uni.setStorageSync('name','王子阳')
	uni.setStorageSync('people',{name:'王子阳',age:24,address:'河南省'})
	console.log(uni.getStorageSync('name'))
	console.log(uni.getStorageSync('people'))
	uni.removeStorageSync('name')
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
