<template>
	<div class="sidebar-header" @click="handleShowAll">
		全部（共 {{ totalProducts }} 件商品）
	</div>
	<div class="app-container">
		<!-- 侧边栏区域 -->
		<div class="sidebar-container">

			<div class="sidebar" style="overflow-y: auto; max-height: 100vh;">
				<div class="sidebar-menu">
					<div class="sidebar-item" v-for="(category, index) in categories" :key="index"
						@click="handleCategoryClick(category)"
						:class="{ active: selectedCategory?.id === category.id }">
						{{ category.name }}（{{ category.products.length }}）
					</div>
				</div>
			</div>
		</div>
		<!-- 主内容区域 -->
		<div class="main-content" style="overflow-y: auto; max-height: 100vh;">
			<!-- 商品展示区域 -->
			<div class="product-list">
				<div v-for="product in filteredProducts" :key="product.id" class="product-card">
					<h3>{{ product.name }}</h3>
					<p class="description">{{ product.description }}</p>
					<p class="price">¥{{ product.price.toFixed(2) }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {
		ref,
		computed
	} from 'vue';

	// 分类和商品数据
	const categories = ref([{
			id: 1,
			name: '数码产品',
			products: [{
					id: 1,
					name: '智能手机',
					description: '最新款旗舰手机',
					price: 5999.00
				},
				{
					id: 2,
					name: '笔记本电脑',
					description: '高性能游戏本',
					price: 8999.00
				},
				{
					id: 3,
					name: '无线耳机',
					description: '降噪蓝牙耳机',
					price: 1299.00
				}
			]
		},
		{
			id: 2,
			name: '家用电器',
			products: [{
					id: 4,
					name: '智能电视',
					description: '4K超高清电视',
					price: 3999.00
				},
				{
					id: 5,
					name: '冰箱',
					description: '双开门节能冰箱',
					price: 5999.00
				}
			]
		},
		{
			id: 3,
			name: '服装配饰',
			products: [{
					id: 6,
					name: '男士夹克',
					description: '春秋季休闲外套',
					price: 399.00
				},
				{
					id: 7,
					name: '女士手提包',
					description: '时尚真皮包包',
					price: 899.00
				}
			]
		},
		{
			id: 4,
			name: '图书音像',
			products: [{
					id: 8,
					name: 'Vue3实战指南',
					description: '前端开发必备',
					price: 89.00
				},
				{
					id: 9,
					name: '古典音乐CD',
					description: '大师经典作品集',
					price: 129.00
				}
			]
		}
	]);

	// 当前选中的分类
	const selectedCategory = ref(null);
	// 是否显示全部
	const showAll = ref(true); // 默认显示全部产品

	// 计算属性：总商品数量
	const totalProducts = computed(() => {
		return categories.value.reduce((total, category) =>
			total + category.products.length, 0);
	});
	import { onNavigationBarButtonTap } from '@dcloudio/uni-app';
	
	// 处理导航栏按钮点击事件
	onNavigationBarButtonTap((e) => {
	  if (e.text === '搜索') {
	    console.log('提交按钮被点击');
	    // 在这里添加提交按钮的处理逻辑，比如调用接口提交数据等
	  } else if (e.text === '新增') {
	    console.log('保存按钮被点击');
	    // 在这里添加保存按钮的处理逻辑，比如保存数据到本地缓存等
	  }
	});
	// 计算属性：过滤后的商品列表
	const filteredProducts = computed(() => {
		if (showAll.value) {
			// 展开所有分类的商品数组
			return categories.value.flatMap(category => category.products);
		}
		if (selectedCategory.value) {
			return selectedCategory.value.products;
		}
		return [];
	});

	// 处理分类点击
	const handleCategoryClick = (category) => {
		selectedCategory.value = category;
		showAll.value = false;
	};

	// 处理显示全部
	const handleShowAll = () => {
		showAll.value = true;
		selectedCategory.value = null;
	};
</script>

<style scoped>
	.app-container {
		display: flex;
		/* 使用 flex 布局实现左右分离 */
		height: 100vh;
		/* 设置容器高度为视口高度 */
	}

	.sidebar-container {
		width: 100px;
		/* 侧边栏宽度 */
		border-right: 1px solid #e0e0e0;
		background-color: white;
	}

	.sidebar-header {
		padding: 12px 15px;
		cursor: pointer;
		border-bottom: 1px solid #e0e0e0;
	}

	.sidebar-menu {
		padding: 10px 0;
	}

	.sidebar-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 12px 15px;
		cursor: pointer;
	}

	.sidebar-item.active {
		background-color: #f0f0f0;
	}

	.main-content {
		flex: 1;
		/* 主内容区域占满剩余空间 */
		background-color: white;
	}

	/* 新增商品列表样式 */
	.product-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 20px;
		padding: 20px;
	}

	.product-card {
		border: 1px solid #e0e0e0;
		border-radius: 8px;
		padding: 15px;
		transition: transform 0.2s;
	}

	.product-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.product-card h3 {
		color: #333;
		margin-bottom: 10px;
	}

	.description {
		color: #666;
		font-size: 0.9em;
		height: 40px;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.price {
		color: #e53935;
		font-weight: bold;
		margin-top: 10px;
	}
</style>