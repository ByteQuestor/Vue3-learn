<!--
 * @Author: 【闲鱼】混吃等死真君 【Github】Bytequestor
 * @Date: 2025-02-24 16:42:56
 * @LastEditTime: 2025-02-25 10:26:36
 * @FilePath: \vantLearn\src\views\layout\index.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by 茉莉花工作室/troml1788, All Rights Reserved. 
-->
<template>
    <div>
        <router-view></router-view>
        <van-tabbar route><!-- v-model="active"-->
            <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/data">报表</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/addr">客服</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to="/mine">{{userState?"我的":"未登录"}}</van-tabbar-item>
        </van-tabbar>
    </div>

</template>

<script>
import { ref,computed } from 'vue';
import { useStore } from "vuex";
export default {
  setup() {
    const active = ref();
    const store = useStore();
        const userState = computed(() => store.state.user);
    return { active,userState };
  },
};
</script>