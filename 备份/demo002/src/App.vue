<!--
 * @Author: 【闲鱼】混吃等死真君 【Github】Bytequestor
 * @Date: 2024-12-04 20:47:49
 * @LastEditTime: 2024-12-05 10:38:22
 * @FilePath: \Vue3-learn\hello_vue3\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by 茉莉花工作室/troml1788, All Rights Reserved. 
-->
<template>
    <div class="app">
        <h1>你好呀</h1>
        <Person/>
    </div>
</template>

<script>
import Person from './components/Person.vue';
export default {
    name: 'App',
    components:{Person} //注册组件
}
</script>

<style>
.app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>