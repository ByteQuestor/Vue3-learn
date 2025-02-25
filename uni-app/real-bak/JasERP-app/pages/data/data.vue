<template>
	<view>
		这里是数据报表
		<!--这个是选择功能的-->
		<view class="container">
			<button v-for="item in activeModules" :key="item.id" class="function-btn" type="primary">
				{{ item.label }}
			</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		computed,
		onMounted
	} from 'vue';
	// 所有功能模块配置
	const allModules = ref([{
			id: 'purchase',
			label: '进货',
			enabled: true
		},
		{
			id: 'sell',
			label: '卖货',
			enabled: true
		},
		{
			id: 'print',
			label: '打印',
			enabled: true
		}
	]);

	// 计算属性：获取激活的模块
	const activeModules = computed(() => {
		return allModules.value.filter(module => module.enabled);
	});
	onShow(() => {
		reSetModule()
	})
	// 初始化加载配置
	onLaunch(() => {
		reSetModule()

	});

	function reSetModule() {
		const savedConfig = uni.getStorageSync('moduleConfig');
		console.log(savedConfig)
		if (savedConfig) {
			allModules.value = allModules.value.map(module => ({
				...module,
				enabled: savedConfig[module.id] ?? module.enabled
			}));
		}
	}
</script>

<style>
	.container {
		padding: 10rpx;
		/* 使用视口宽度百分比设置内边距 */
		background-color: #f7f7f7;
	}
	.function-btn{
		padding: 10rpx;
		width:50%;
		margin: 20rpx;
	}
</style>