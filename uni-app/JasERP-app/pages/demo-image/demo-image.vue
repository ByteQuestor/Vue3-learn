<template>
	<!--参考资料地址：https://uniapp.dcloud.net.cn/component/image.html-->
	<view class="img-wrap">
		<image src="/static/demo-image.png" mode="aspectFit" class="img"></image>
	</view>
	<view class="price">
		￥14元
	</view>
</template>

<script setup>
	
</script>

<style>
	.img-wrap{
		margin: 20rpx;
	}
	.img{
		width: 100%;
		height: 400rpx;
		margin-left: 20rpx;
	}
	.price{
		color: red;
		font-size: 40rpx;
	}
</style>
