<template>
    <view class="page">
        <view class="feedback">
            <view class="feedback-type" @click="typeView = true">
                <view>所属分类</view>
                <view>
                    <text>{{ typeData[typeSelected].label }}</text>
                    <image src="/static/feedback/right.png"></image>
                </view>
            </view>
            <view class="feedback-content">
                <textarea placeholder="请仔细描述您的问题"></textarea>
            </view>
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
    </view>
</template>

<script setup>
import { ref } from 'vue';

// 响应式数据
const imgData = ref([
    {
        src: '/static/feedback/logo.png'
    },
    {
        src: '/static/feedback/logo.png',
        uploading: 1
    },
]);
const typeView = ref(false);
const typeSelected = ref(0); // 选中的分类下标
const typeData = ref([
    {
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

// 方法
const clickType = (k) => {
    typeSelected.value = k;
    typeView.value = false;
};
</script>

<style lang="scss" scoped>
// @import "./index.scss";
	.page {
		background: #aa0000;
		// min-height: 100vh;
		height: 100vh;
		width: 100vw;
		.header {
			height: 10vh;
			display: flex;
			/* 使用 flex 布局使左右部分水平排列 */
		}
		
		.left {
			flex: 0 0 20%;
			/* 固定宽度为 20% */
			background-color: #1aa277;
			height: 100%;
			
			.imgs-upload {
				width: 100%;
				height: 100%;
				border-radius: 12rpx;
				// margin: rpx;
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
			/* 固定宽度为 80% */
			background-color: #ffaaff;
			height: 100%;
			display: flex;
			/* 使用 flex 布局使上下部分垂直排列 */
			flex-direction: column;
		}
		
		.right-top,
		.right-bottom {
			flex: 1;
			/* 使上下部分高度相等，各占一半 */
		}
		
		.right-top {
			background-color: #aaff00;
		}
		
		.right-bottom {
			background-color: #55aa00;
		}
		
		.header-input {
			display: inline-block;
			vertical-align: middle;
		}
		.feedback {
			position: absolute;
			min-height: 100vh;
			width: 750rpx;

			.feedback-type {
				background: #fff;
				width: 750rpx;
				display: flex;
				height: 100rpx;
				justify-content: space-between;
				align-items: center;
				box-sizing: border-box;
				padding: 0 15rpx;
				margin: 20rpx 0;

				&:active {
					background: #f0f0f0;
				}

				view {
					&:nth-child(1) {
						font-size: 14px;
					}

					&:nth-child(2) {
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
				}
			}

			.feedback-imgs {
				display: flex;
				flex-wrap: wrap;

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
					
					.feedback-imgs-item-del{
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
						image{
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

		.type {
			width: 750rpx;
			min-height: 100vh;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 2;
			display: flex;
			transition: transform 0.3s ease;
		
			.type-shadow {
				width: 100rpx;
				background: rgba(0, 0, 0, .5);
				animation: shadow 600ms;
				
				@keyframes shadow {
					0%{
						background: rgba(0, 0, 0, 0);
					}
					50%{
						background: rgba(0, 0, 0, 0);
					}
					100%{
						background: rgba(0, 0, 0, .5);
					}
				}
			}

			.type-list{
				width: 650rpx;
				background: #ffff7f;
				height: 100vh;
				overflow-y: auto;
				
				.type-list-item{
					display: flex;
					flex-direction: column;
					padding: 15rpx;
					border-bottom: 1px solid #f0f0f0;
					
					&:active{
						background: #ccc;
					}
					
					text{
						&:nth-child(1){
							font-size: 14px;
							margin-bottom: 8rpx;
							font-weight: bold;
						}
						
						&:nth-child(2){
							font-size: 12px;
							color: #777;
						}
					}
				}
			}
		}
	}
</style>