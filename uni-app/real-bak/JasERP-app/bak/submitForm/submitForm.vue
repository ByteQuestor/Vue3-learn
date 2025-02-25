<template>
	<view class="page">
		<div class="header">
			<div class="left">
				<view class="imgs-upload">
					<image src="/static/feedback/upload.png" />
				</view>
			</div>
			<div class="right">
				<div class="right-top">
					产品名称：<input class="header-input" placeholder="输入产品名称" />
				</div>
				<div class="right-bottom">
					条形码：<input class="header-input" placeholder="输入产品条形码" />
				</div>
			</div>
		</div>

		<view class="feedback">
			<view class="feedback-type" @click="typeView = true">
				<view>所属分类</view>
				<view>
					<text>{{ typeData[typeSelected].label }}</text>
					<image src="/static/feedback/right.png"></image>
				</view>
			</view>
			<view class="feedback-content">
				货号：<input class="header-input" placeholder="输入货号" />
			</view>
			<view class="feedback-type" @click="showModelsView">
				<view>规格型号</view>
				<view>
					<text>{{ modelsData[selectedModel].label }}</text>
					<image src="/static/feedback/right.png"></image>
				</view>
			</view>
			<view class="feedback-type" @click="attributeView = true">
				<view>属性管理</view>
				<view>
					<text>{{ attributeData[selectedAttribute].label }}</text>
					<image src="/static/feedback/right.png"></image>
				</view>
			</view>
			<view class="feedback-type" @click="unitView = true">
				<view>单位</view>
				<view>
					<text>{{ unitData[selectedUnit].label }}</text>
					<image src="/static/feedback/right.png"></image>
				</view>
			</view>
			<view class="feedback-type" @click="typeView = true">
				<view>价格管理</view>
				<view>
					<text>{{ typeData[typeSelected].label }}</text>
					<image src="/static/feedback/right.png"></image>
				</view>
			</view>
			<view class="feedback-content">
				<div>
					标签：<input class="header-input" placeholder="输入货号" />
				</div>
				<textarea class="feedback-text" placeholder="备注"></textarea>
				<view class="feedback-imgs">
					<view class="feedback-imgs-item" v-for="(v, k) in imgData" :key="k">
						<image :src="v.src" />
						<view class="feedback-imgs-item-mask" v-if="v.uploading">
							上传中
						</view>
						<view class="feedback-imgs-item-del">
							<image src="/static/feedback/del.png"></image>
						</view>
					</view>
					<view class="feedback-imgs-upload" v-if="imgData.length < 5">
						<image src="/static/feedback/upload.png" />
					</view>
				</view>
			</view>
			<div class="feedback-separator"></div>
			<view class="feedback-button">提交反馈</view>
		</view>

		<view class="type" :style="{ transform: typeView ? 'translateX(0)' : 'translateX(750rpx)' }">
			<view v-if="typeView" class="type-shadow" @click="typeView = false"></view>
			<view v-else class="type-shadow" style="opacity: 0;"></view>
			<view class="type-list">
				<view class="type-list-item" v-for="(v, k) in typeData" :key="k" @click="clickType(k)">
					<text>{{ v.label }}</text>
					<text>{{ v.desc }}</text>
				</view>
			</view>
		</view>

		<view class="models" :style="{ transform: modelsView ? 'translateX(0)' : 'translateX(750rpx)' }">
			<view v-if="modelsView" class="models-shadow" @click="modelsView = false"></view>
			<view v-else class="models-shadow" style="opacity: 0;"></view>
			<view class="models-list">
				<view class="models-list-item" v-for="(v, k) in modelsData" :key="k" @click="selectModelView(k)">
					<text>{{ v.label }}</text>
					<text>{{ v.desc }}</text>
				</view>
			</view>
		</view>

		<view class="attribute" :style="{ transform: attributeView ? 'translateX(0)' : 'translateX(750rpx)' }">
			<view v-if="attributeView" class="attribute-shadow" @click="attributeView = false"></view>
			<view v-else class="attribute-shadow" style="opacity: 0;"></view>
			<view class="attribute-list">
				<view class="attribute-list-item" v-for="(v, k) in attributeData" :key="k" @click="selectAttributeView(k)">
					<text>{{ v.label }}</text>
					<text>{{ v.desc }}</text>
				</view>
			</view>
		</view>

		<view class="unit" :style="{ transform: unitView ? 'translateX(0)' : 'translateX(750rpx)' }">
			<view v-if="unitView" class="unit-shadow" @click="unitView = false"></view>
			<view v-else class="unit-shadow" style="opacity: 0;"></view>
			<view class="unit-list">
				<view class="unit-list-item" v-for="(v, k) in unitData" :key="k" @click="selectUnitView(k)">
					<text>{{ v.label }}</text>
					<text>{{ v.desc }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	// 响应式数据
	const imgData = ref([{
			src: '/static/feedback/logo.png'
		},
		{
			src: '/static/feedback/logo.png',
			uploading: 1
		},
	]);
	const typeView = ref(false);
	const typeSelected = ref(0); // 选中的分类下标
	const modelsView = ref(false); // 控制规格型号子页面的显示与隐藏
	const selectedModel = ref(0); // 选中的规格型号下标
	const attributeView = ref(false); // 控制属性管理子页面的显示与隐藏
	const selectedAttribute = ref(0); // 选中的属性管理下标
	const unitView = ref(false); // 控制单位子页面的显示与隐藏
	const selectedUnit = ref(0); // 选中的单位下标
	const typeData = ref([{
			label: '账户问题',
			desc: '登录、昵称、个人信息保护等'
		},
		{
			label: '充值问题',
			desc: '充值金额未到账或少到账'
		},
		{
			label: '体验问题',
			desc: '对于软件有体验改进的宝贵意见'
		},
		{
			label: '内容侵权',
			desc: '平台有内容侵犯了您的个人权益'
		},
		{
			label: '举报违规',
			desc: '违规评论，辱骂，广告'
		}
	]);
	const modelsData = ref([{
			label: '小型',
			desc: '小型小型小型'
		},
		{
			label: '大型',
			desc: '大型大型大型'
		},
		{
			label: '超大型',
			desc: '超大型超大型超大型'
		},
		{
			label: '特大型',
			desc: '特大型特大型特大型'
		},
		{
			label: '无穷大',
			desc: '无穷大无穷大无穷大'
		}
	]);
	const attributeData = ref([{
			label: '属性1',
			desc: '属性1属性1属性1属性1'
		},
		{
			label: '属性2',
			desc: '属性2属性2属性2属性2'
		},
		{
			label: '属性3',
			desc: '属性3属性3属性3属性3'
		},
		{
			label: '属性4',
			desc: '属性4属性4属性4属性4'
		},
		{
			label: '属性5',
			desc: '属性5属性5属性5属性5'
		}
	]);

	const unitData = ref([{
			label: '毫米',
			desc: '毫米毫米毫米毫米'
		},
		{
			label: '厘米',
			desc: '厘米厘米厘米厘米'
		},
		{
			label: '分米',
			desc: '分米分米分米分米'
		},
		{
			label: '米',
			desc: '米米米米米米米米'
		},
		{
			label: '千米',
			desc: '千米千米千米千米'
		}
	]);

	// 方法
	const clickType = (k) => {
		typeSelected.value = k;
		typeView.value = false;
	};

	// 显示规格型号子页面
	const showModelsView = () => {
		modelsView.value = true;
	};

	// 选择规格型号
	const selectModelView = (k) => {
		selectedModel.value = k;
		modelsView.value = false;
	};

	// 选择属性
	const selectAttributeView = (k) => {
		selectedAttribute.value = k;
		attributeView.value = false;
	};

	// 选择单位
	const selectUnitView = (k) => {
		selectedUnit.value = k;
		unitView.value = false;
	};
</script>

<style lang="scss" scoped>
	@import "./index.scss";

	.page {
		background: #d22929;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		position: relative;

		.header {
			height: 10vh;
			display: flex;

			.left {
				flex: 0 0 20%;
				height: 100%;

				.imgs-upload {
					width: 100%;
					height: 100%;
					border-radius: 12rpx;
					background: #ddd;
					display: flex;
					align-items: center;
					justify-content: center;

					&:active {
						background: #ccc;
					}

					image {
						width: 60rpx;
						height: 60rpx;
					}
				}
			}

			.right {
				flex: 0 0 80%;
				height: 100%;
				display: flex;
				flex-direction: column;

				.right-top,
				.right-bottom {
					flex: 1;
				}

				.header-input {
					display: inline-block;
					vertical-align: middle;
				}
			}
		}

		.feedback {
			position: absolute;
			width: 750rpx;
			top: 10vh;
			bottom: 0;
			overflow-y: auto;

			.feedback-type {
				position: relative;
				min-height: auto;
				height: auto;
				padding-bottom: 120rpx;

				&:active {
					background: #f0f0f0;
				}

				view {
					&:first-child {
						font-size: 14px;
					}

					&:last-child {
						font-size: 12px;
						display: flex;
						align-items: center;
						color: #777;

						image {
							width: 25rpx;
							height: 25rpx;
						}
					}
				}
			}

			.feedback-content {
				background: #fff;
				padding: 15rpx;
				margin: 20rpx 0;

				textarea {
					font-size: 14px;
					height: 50rpx;
				}

				.feedback-imgs {
					display: flex;
					flex-wrap: wrap;
					margin-top: 15rpx;

					.feedback-imgs-item {
						width: 150rpx;
						height: 150rpx;
						background: #444;
						display: flex;
						justify-content: center;
						align-items: center;
						border-radius: 12rpx;
						margin: 10rpx;
						position: relative;

						.feedback-imgs-item-mask {
							position: absolute;
							left: 0;
							top: 0;
							width: 150rpx;
							height: 150rpx;
							z-index: 1;
							background: rgba(0, 0, 0, .5);
							color: #fff;
							font-size: 14px;
							display: flex;
							justify-content: center;
							align-items: center;
						}

						image {
							height: 150rpx;
						}

						.feedback-imgs-item-del {
							width: 40rpx;
							height: 40rpx;
							position: absolute;
							right: -15rpx;
							top: -15rpx;
							display: flex;
							justify-content: center;
							align-items: center;
							z-index: 2;
							background: #fff;
							border-radius: 50%;

							image {
								width: 40rpx;
								height: 40rpx;
							}
						}
					}

					.feedback-imgs-upload {
						width: 150rpx;
						height: 150rpx;
						border-radius: 12rpx;
						margin: 10rpx;
						background: #ddd;
						display: flex;
						align-items: center;
						justify-content: center;

						&:active {
							background: #ccc;
						}

						image {
							width: 60rpx;
							height: 60rpx;
						}
					}
				}
			}

			.feedback-separator {
				height: 1px;
				background: #ccc;
				margin: 20rpx 0;
			}

			.feedback-button {
				width: 700rpx;
				color: #fff;
				background: #23D49D;
				font-size: 16px;
				text-align: center;
				height: 80rpx;
				line-height: 80rpx;
				border-radius: 45rpx;
				position: fixed;
				bottom: 50rpx;
				left: 25rpx;

				&:active {
					background: #1aa277;
				}
			}
		}

		.type,
		.models,
		.attribute,
		.unit {
			position: fixed;
			top: 0;
			width: 80vh;
			min-height: 100%;
			z-index: 2;
			display: flex;
			transition: transform 0.3s ease;

			.type-shadow,
			.models-shadow,
			.attribute-shadow,
			.unit-shadow {
				width: 100rpx;
				background: rgba(0, 0, 0, .5);
				animation: shadow 600ms;

				@keyframes shadow {
					0% {
						background: rgba(0, 0, 0, 0);
					}

					50% {
						background: rgba(0, 0, 0, 0);
					}

					100% {
						background: rgba(0, 0, 0, .5);
					}
				}
			}

			.type-list,
			.models-list,
			.unit-list,
			.attribute-list {
				width: 650rpx;
				background: #fff;
				height: 100vh;
				overflow-y: auto;

				.type-list-item,
				.models-list-item,
				.unit-list-item,
				.attribute-list-item {
					display: flex;
					flex-direction: column;
					padding: 15rpx;
					border-bottom: 1px solid #f0f0f0;

					&:active {
						background: #ccc;
					}

					text {
						&:first-child {
							font-size: 14px;
							margin-bottom: 8rpx;
							font-weight: bold;
						}

						&:last-child {
							font-size: 12px;
							color: #777;
						}
					}
				}
			}
		}
	}
</style>