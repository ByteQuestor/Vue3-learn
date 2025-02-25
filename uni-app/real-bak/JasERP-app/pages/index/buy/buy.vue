<template>
	<view>
		这里是采购界面
		<button type="primary" @click="backToIndex">返回主界面</button>
	</view>
</template>

<script setup>
	function backToIndex(){
		uni.switchTab({
			url:"/pages/index/index"
		})
	}
</script>

<style>
	       
</style>
