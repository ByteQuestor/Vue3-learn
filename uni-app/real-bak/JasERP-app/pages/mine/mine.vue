<template>
	<view>
		<button type="primary" @click="toSettings">跳转设置</button>
	</view>
</template>

<script setup>
	function toSettings(){
		uni.navigateTo({
			url:"/pages/mine/settings/settings"
		})
	}
</script>

<style>
	       
</style>
