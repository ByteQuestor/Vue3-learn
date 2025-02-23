<!--
 * @Author: 【闲鱼】混吃等死真君 【Github】Bytequestor
 * @Date: 2025-02-23 15:30:48
 * @LastEditTime: 2025-02-23 17:42:58
 * @FilePath: \vantLearn\src\views\login\index.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by 茉莉花工作室/troml1788, All Rights Reserved. 
-->
<template>
    <div>
        <van-nav-bar title="登录" class="page-nav-bar" />
        <van-form @submit="onSubmit">
            <van-field left-icon="manager" name="userName" placeholder="请输入用户名" v-model="userName" />
            <van-field left-icon="lock" type="password" name="userPwd" placeholder="请输入密码" v-model="userPwd" /> <!-- 修正：将 v-model 绑定到 userPwd -->
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>

    </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { login } from "../../api/user";

// 定义 useSubmit 函数
function useSubmit(user) {
    const onSubmit = async () => {
        const res = await login(user);
        if (res.data.code === 200) {
            console.log("用户登录成功");
        } else {
            console.log("用户登录失败");
        }
    };
    return {
        onSubmit
    };
};

export default {
    setup() {
        const user = reactive({
            userName: '',
            userPwd: ''
        });

        // 调用 useSubmit 函数获取 onSubmit
        const { onSubmit } = useSubmit(user);

        return {
            ...toRefs(user),
            onSubmit
        };
    }
};
</script>
<style scoped></style>