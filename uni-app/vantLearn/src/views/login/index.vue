<!--
 * @Author: 【闲鱼】混吃等死真君 【Github】Bytequestor
 * @Date: 2025-02-23 15:30:48
 * @LastEditTime: 2025-02-24 16:09:10
 * @FilePath: \vantLearn\src\views\login\index.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by 茉莉花工作室/troml1788, All Rights Reserved. 
-->
<template>
    <div>
        <van-nav-bar title="登录" class="page-nav-bar" />
        <van-form @submit="onSubmit">
            <van-field left-icon="manager" name="password" placeholder="请输入用户名" v-model="username"
                :rules="userFormRules.name" />
            <van-field left-icon="lock" type="password" name="password" placeholder="请输入密码" v-model="password"
                :rules="userFormRules.pwd" />
            <!-- 修正：将 v-model 绑定到 userPwd -->
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
import { showSuccessToast, showFailToast, showLoadingToast } from 'vant';
import { useStore } from "vuex";
// 定义 useSubmit 函数
function useSubmit(user) {
    const store = useStore();
    const onSubmit = async () => {
        showLoadingToast({
            message: '加载中...',
            forbidClick: true,
        });
        console.log(user);
        const res = await login(user);
        if (res.data.code === 200) {
            // console.log("用户登录成功");
            // console.log(res.data);
            store.commit("setUser", res.data.data);
            showSuccessToast('登录成功');
        } else {
            // console.log("用户登录失败");
            showFailToast('登陆失败');
        }
    };
    //定义表单验证规则
    const userFormRules = {
        name: [{ required: true, message: '请输入用户名' }],
        pwd: [
            { required: true, message: '请输入密码' },  // 修正：将 message 改为 required
            // { min: 3, max: 10, message: '长度在 3 到 10 个字符' }
            // {pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: '密码必须包含字母和数字，且长度至少为8位'}
            // { pattern: /^\d{6}$/, message: '密码必须为6位数字' }
            {
                pattern: /^[a-zA-Z]+$/,
                message: '密码必须为字母'
            }
        ]
    };
    return {
        onSubmit,
        userFormRules
    };
};

export default {
    setup() {
        const user = reactive({
            username: '',
            password: ''
        });
        return {
            ...toRefs(user),
            ...useSubmit(user),
        };
    }
};
</script>
<style scoped></style>