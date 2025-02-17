<template>
	<!--https://uniapp.dcloud.net.cn/component/form.html-->
	<view>
		<form @submit="formSubmit" @reset="formReset">
			<view class="title">
				请输入姓名
			</view>
			<input name="name" type="number" class="ipt" placeholder="请输入内容" maxlength="10"/>
			<view class="title">
				请输入年龄
			</view>
			<input name="age" type="number" class="ipt" placeholder="请输入内容" maxlength="10"/>
			<view class="title">
				请选择性别
			</view>
			<radio-group name="sex">
				<label>
					<radio value="男"></radio>
					<text>男</text>
				</label>
				<label>
					<radio value="女"></radio>
					<text>女</text>
				</label>
			</radio-group>
			<view class="title">请选择爱好</view>
			<checkbox-group name="like" style="margin: 20rpx;">
				<label>
					<checkbox value="读书"></checkbox>
					<text>读书</text>
					
				</label>
				<label>
					<checkbox value="写字"></checkbox>
					<text>写字</text>
				</label>
			</checkbox-group>
			<view class="title">
				请选择身高
			</view>
			<slider name="height" show-value max="300" min="0"></slider>
			<view class="title">
				是否是在校生
			</view>
			<button type="primary" form-type="submit">提交</button>
			<button type="default" form-type="reset">重置</button>
		</form>
	</view>
</template>

<script setup>
	function formSubmit(event){
		uni.showToast({
			title: "提交成功"
		})
		console.log(event)
		console.log(event.detail.value.value)
	}
	function formReset(event){
		console.log(event.detail.value.value)
	}
</script>

<style>
	   .ipt{
	   	margin: 20rpx;
	   	border: 2rpx solid royalblue;
	   	padding: 20rpx;
	   }    
	   .title{
		   
	   }
</style>
