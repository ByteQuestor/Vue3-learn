<template>
	<view class="container">
		<view class="setting-item" v-for="module in allModules" :key="module.id">
			<text>{{ module.label }}</text>
			<switch :checked="module.enabled" @change="toggleModule(module.id, $event)" />
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue';

	const allModules = ref([]);

	// 初始化加载配置
	onMounted(() => {
		console.log("进入设置")
		const defaultConfig = {
			purchase: true,
			sell: true,
			print: true
		};

		const savedConfig = uni.getStorageSync('moduleConfig') || defaultConfig;

		allModules.value = [{
				id: 'purchase',
				label: '进货',
				enabled: savedConfig.purchase
			},
			{
				id: 'sell',
				label: '卖货',
				enabled: savedConfig.sell
			},
			{
				id: 'print',
				label: '打印',
				enabled: savedConfig.print
			}
		];
	});
	
	// 切换模块状态
	const toggleModule = (moduleId, event) => {
		const newValue = event.detail.value;
		const module = allModules.value.find(m => m.id === moduleId);
		if (module) {
			module.enabled = newValue;
			saveConfig();
		}
	};

	// 保存配置到本地存储
	const saveConfig = () => {
		const config = allModules.value.reduce((acc, cur) => {
			acc[cur.id] = cur.enabled;
			return acc;
		}, {});

		uni.setStorageSync('moduleConfig', config);
	};
	onHide(()=>{
		saveConfig();
	})
</script>

<style>
	.setting-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
		border-bottom: 1px solid #eee;
	}
</style>