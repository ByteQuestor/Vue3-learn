<!-- 主页面 index.vue -->
<template>

	<view class="container">
		<!-- 第一行功能模块 -->
		
		<view class="module-row">
			<navigator url="/pages/index/sale/sale" class="module-item">
				<image :src="saleIcon" class="icon"></image>
				<view class="title">销售</view>
			</navigator>
			<navigator url="/pages/index/buy/buy" class="module-item">
				<image :src="buyIcon" class="icon"></image>
				<view class="title">采购</view>
			</navigator>
			<!-- <view class="module-item" @click="handleModuleClick('销售')">
				<image :src="saleIcon" class="icon"></image>
				<text class="title">销售</text>
			</view> -->
			<!-- <view class="module-item" @click="handleModuleClick('采购')">
				<image :src="buyIcon" class="icon"></image>
				<text class="title">采购</text>
			</view> -->
		</view>
		
		<!-- 第二行功能模块 -->
		<view class="module-row">
			
			<navigator url="/pages/index/client/client" class="module-item">
				<image :src="clientIcon" class="icon"></image>
				<view class="title">客户</view>
			</navigator>
			<navigator url="/pages/index/supperliers/supperliers" class="module-item">
				<image :src="suppliersIcon" class="icon"></image>
				<view class="title">供应商</view>
			</navigator>
			
			<!-- <view class="module-item" @click="handleModuleClick('销售')">
				<image :src="clientIcon" class="icon"></image>
				<text class="title">客户</text>
			</view>
			<view class="module-item" @click="handleModuleClick('采购')">
				<image :src="suppliersIcon" class="icon"></image>
				<text class="title">供应商</text>
			</view> -->
		</view>
		
		<!-- 第三行功能模块 -->
		<view class="module-row">
			<navigator url="/pages/index/productions/productions" class="module-item">
				<image :src="productionsIcon" class="icon"></image>
				<view class="title">产品</view>
			</navigator>
			<navigator url="/pages/index/inventory/inventory" class="module-item">
				<image :src="inventoryIcon" class="icon"></image>
				<view class="title">库存</view>
			</navigator>
			<!-- <view class="module-item" @click="handleModuleClick('销售')">
				<image :src="productionsIcon" class="icon"></image>
				<text class="title">产品</text>
			</view>
			<view class="module-item" @click="handleModuleClick('采购')">
				<image :src="inventoryIcon" class="icon"></image>
				<text class="title">库存</text>
			</view> -->
		</view>
		
		<!-- 第四行功能模块 -->
		<view class="module-row">
			<navigator url="/pages/index/cost/cost" class="module-item">
				<image :src="cost" class="icon"></image>
				<view class="title">费用收入</view>
			</navigator>
			<navigator url="/pages/index/returngoods/returngoods" class="module-item">
				<image :src="returngoodsIcon" class="icon"></image>
				<view class="title">退后</view>
			</navigator>
			<!-- <view class="module-item" @click="handleModuleClick('销售')">
				<image :src="cost" class="icon"></image>
				<text class="title">费用收入</text>
			</view>
			<view class="module-item" @click="handleModuleClick('采购')">
				<image :src="returngoodsIcon" class="icon"></image>
				<text class="title">退货</text>
			</view> -->
		</view>
		
	</view>

</template>

<script setup>
	import {
		ref,
		computed,
		onMounted
	} from 'vue';
	//主菜单图标
	import saleIcon from '@/static/menu/sale.png';
	import buyIcon from '@/static/menu/buy.png';
	import clientIcon from '@/static/menu/client.png';
	import inventoryIcon from '@/static/menu/inventory.png';
	import productionsIcon from '@/static/menu/productions.png';
	import returngoodsIcon from '@/static/menu/returngoods.png';
	import suppliersIcon from '@/static/menu/suppliers.png';
	import cost from '@/static/menu/cost.png';
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
</script>

<style>
	.container {
	        padding: 2vw; /* 使用视口宽度百分比设置内边距 */
	        background-color: #f7f7f7;
	    }
	
	    .module-row {
	        display: flex;
	        flex-wrap: wrap; /* 允许换行 */
	        justify-content: space-between;
	        margin-bottom: 2vw; /* 使用视口宽度百分比设置底部外边距 */
	    }
	
	    .module-item {
	        flex-basis: calc(50% - 1vw); /* 每个模块占据一半宽度，减去间距 */
	        display: flex;
	        flex-direction: column;
	        align-items: center;
	        text-align: center;
	        background-color: #ffffff;
	        padding: 14vw 3vw; /* 使用视口宽度百分比设置内边距 */
	        border-radius: 2vw; /* 使用视口宽度百分比设置圆角 */
	        box-shadow: 0 0.2vw 0.4vw rgba(0, 0, 0, 0.1); /* 使用视口宽度百分比设置阴影 */
	        margin-bottom: 2vw; /* 使用视口宽度百分比设置底部外边距 */
	        box-sizing: border-box; /* 确保内边距和边框包含在宽度内 */
	    }
	
	    .icon {
	        width: 10vw; /* 使用视口宽度百分比设置图标宽度 */
	        height: 10vw; /* 使用视口宽度百分比设置图标高度 */
	    }
	
	    .title {
	        margin-top: 1vw; /* 使用视口宽度百分比设置顶部外边距 */
	        font-size: 3vw; /* 使用视口宽度百分比设置字体大小 */
	        color: #333333;
	    }
</style>