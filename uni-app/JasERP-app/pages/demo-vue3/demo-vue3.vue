<template>
	<view>
		{{name + "123"}}
		{{active? 'yes':'no'}}
		{{Date.now()}}
		<view class="">
			{{Math.random()}}
		</view>
	</view>
	
	<image :src="imgUrl" mode=""></image>
	<view :class="{bbb:active}">
		v-bind指令
	</view>
	
	<!--可以用于切换UI使用-->
	<view :class="active ? 'aaa':'bbb'">
		v-bind指令
	</view>
	<view :style="{width:'300rpx',height: height+'px',backgroundColor:'red'}">
		v-bind指令
	</view>
</template>

<script setup>
	let name = '王子阳'
	let imgUrl = '../../static/demo-image.png'
	let active = false	//为true时激活aaa效果
	let height = 500
	onLoad((event)=>{
		console.log(event)
		uni.setNavigationBarTitle({
			title:event.title
		})
		uni.setNavigationBarColor({
			frontColor:"#007aff",
			backgroundColor:"#333"
		})
		// uni.showNavigationBarLoading()//加载图标
	})
</script>

<style>
	.aaa{
		background-color: seagreen;
		padding: 40rpx;
	}
	.bbb{
		background-color: firebrick;
		padding: 40rpx;
	}
</style>
