<!--
 * @Author: 【闲鱼】混吃等死真君 【Github】Bytequestor
 * @Date: 2025-02-24 16:56:22
 * @LastEditTime: 2025-02-25 10:50:27
 * @FilePath: \vantLearn\src\views\mine\mine.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by 茉莉花工作室/troml1788, All Rights Reserved. 
-->
<template>
    <div class="my-container">
        <!-- 未登录状态 -->
        <div v-if="!userState" class="header not-login">
            <div class="login-btn" @click="this.$router.push('/login')">
                <img class="mobile-img" src="../../assets/snack.png" alt="" />
                <span class="text">注册/登录</span>
            </div>
        </div>
        <!-- 已登录状态 -->
        <div v-else class="header user-info">
            <div class="base-info">
                <div class="left">
                    <van-image fit="cover" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                        class="avatar"></van-image>
                    <span class="name">茉莉花工作室首款</span>
                </div>
                <div class="right">
                    <van-button size="mini" round>
                        编辑资料
                    </van-button>
                </div>
            </div>
            <div class="data-stats">
                <div class="data-item">
                    <span class="count">123</span>
                    <span class="text">头条</span>
                </div>
                <div class="data-item">
                    <span class="count">456</span>
                    <span class="text">粉丝</span>
                </div>
                <div class="data-item">
                    <span class="count">789</span>
                    <span class="text">关注</span>
                </div>
                <div class="data-item">
                    <span class="count">789</span>
                    <span class="text">关注</span>
                </div>
            </div>
        </div>

        <!---宫格布局-->
        <van-grid :column-num="2" clickable>
            <van-grid-item icon="star-o" text="文字" />
            <van-grid-item icon="clock-o" text="文字" />
        </van-grid>

        <!---消息通知与退出登录-->
        <van-cell title="消息通知" is-link />
        <van-cell title="功能设置" is-link />
        <van-cell title="退出登录" class="logout-cell" v-if="userState" @click="onLogout" />
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { showConfirmDialog } from 'vant';
function userLogout(store) {
    const onLogout = () => {
        //在这里添加退出登录的逻辑
        showConfirmDialog({
            // title: '标题',
            message:
                '确认退出吗？',
        })
            .then(() => {
                // 确认按钮
                // console.log("退出")
                store.commit("setUser", null);
            })
            .catch(() => {
                // 取消按钮
                console.log("取消")
            });
    }
    return {
        onLogout,

    }
}
export default {
    setup() {
        const store = useStore();
        const userState = computed(() => store.state.user);
        return {
            userState,
            ...userLogout(store)
        };
    }
}
</script>

<style>
.my-container {
    height: 100%;
    background-color: #f5f5f5;
}

.header.not-login {
    background-color: #0088ff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
}

.login-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mobile-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

.text {
    color: white;
    margin-top: 20px;
    font-size: 18px;
}

.user-info {
    background-color: white;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-info .base-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.user-info .left {
    display: flex;
    align-items: center;
}

.user-info .left .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
    border: 1px solid #ccc;
}

.user-info .left .name {
    font-size: 18px;
    font-weight: bold;
}

.user-info .right {
    display: flex;
    align-items: center;
}

.data-stats {
    display: flex;
    justify-content: space-around;
}

.data-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.data-item .count {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
}

.data-item .text {
    color: #666;
    font-size: 14px;
    margin-top: 0;
}

.van-grid-item__icon {
    color: #eb5253;
}

.logout-cell {
    text-align: center;
    color: #d86262;
    height: 120px;
    margin-top: 9px;
}
</style>