<template>
	<view>
		<!-- <button type="primary" @click="submit">提交</button>
		<button type="primary" @click="xiaoshi">取消提示框</button> -->
		<!-- <navigator url="/pages/demo-vue3/demo-vue3?title=未来">
			跳转界面并设置其标题
		</navigator> -->
		<button type="primary" @click="tabbar">设置红点</button>
		<button type="primary" @click="removeTabbar">取消红点</button>
	</view>
</template>

<script setup>
	function tabbar(){
		uni.showTabBarRedDot({
			index:1,
		})
		uni.setTabBarItem({
			index:1,
			text:'商品分类'
		})
		uni.setTabBarBadge({
			index:2,
			text:3
		})
	}
	function removeTabbar(){
		uni.removeTabBarBadge({
			index:2
		})
		uni.hideTabBarRedDot({
			index:1
		})
	}
</script>

<style>

</style>