<template>
	<!--https://uniapp.dcloud.net.cn/component/button.html-->
	<view>
		<button type="warn" @click="submit">提交</button>
	</view>
</template>

<script setup>
	function submit(){
		uni.showToast({
			title: "提交成功"
		})
	}
</script>

<style>
	       
</style>
