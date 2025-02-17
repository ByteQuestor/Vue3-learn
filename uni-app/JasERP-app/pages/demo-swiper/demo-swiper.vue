<template>
	<!--https://uniapp.dcloud.net.cn/component/swiper.html-->
	<view>
		<swiper  class="swiper-wary">
			<swiper-item>
				<image src="/static/logo.png" mode="aspectFit" class="img"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/demo-image.png" mode="aspectFit" class="img"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	
</script>

<style>
	.swiper-wary{
		background-color: firebrick;
		height: 300rpx;
	}
	.img{
		width: 100%;
		height: 100%;
	}
</style>
