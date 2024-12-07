<!--
 * @Author: 【闲鱼】混吃等死真君 【Github】Bytequestor
 * @Date: 2024-12-05 10:14:24
 * @LastEditTime: 2024-12-07 22:09:01
 * @FilePath: \Vue3-learn\hello_vue3\src\components\Person.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by 茉莉花工作室/troml1788, All Rights Reserved. 
-->

<template>
    <div class="person">
        姓：<input type="text" v-model="firstName"><br>
        名：<input type="text" v-model="lastName"><br>
        姓名：<span>{{ fullName }} </span>
    </div>
</template>

<script setup name="Person">
import {ref,computed} from "vue"
let firstName = ref("aaaa")
let lastName = ref("bbbb")
let fullName = computed(()=>{
    return firstName.value + "-" + lastName.value
})
</script>

<style>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
button{
    margin: 0 10px;
}
li{
    font-size: 20px;
}
</style>