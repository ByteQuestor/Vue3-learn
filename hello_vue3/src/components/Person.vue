<!--
 * @Author: 【闲鱼】混吃等死真君 【Github】Bytequestor
 * @Date: 2024-12-05 10:14:24
 * @LastEditTime: 2024-12-08 21:01:50
 * @FilePath: \Vue3-learn\hello_vue3\src\components\Person.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by 茉莉花工作室/troml1788, All Rights Reserved. 
-->

<template>
    <div class="person">
        <h1>水温：{{ tmp }} ℃</h1>
        <h2>水位：{{ hig }} CM</h2>
        <button @click="changeTmp">水温+10 ℃</button>
        <button @click="changeHig">水位+10 CM</button>
    </div>
</template>

<script setup name="Person">
import { ref, watch, watchEffect } from 'vue';

    let tmp = ref(0)
    let hig = ref(0)
    function changeTmp(){
        tmp.value += 10
    }
    function changeHig(){
        hig.value += 10
    }
    /*
    如果用watch，那么我如果需要监视很多数据，一个一个的指定肯定是不现实
    */
    // watch([tmp,hig],()=>{
    //     if(tmp.value >= 60 || hig.value >=70){
    //         console.log("发送短信")
    //     }
    // })
    watchEffect(()=>{
        if(tmp.value >= 60 || hig.value >=70){
            console.log("发送短信")
        }
    })
</script>

<style>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 10px;
}

li {
    font-size: 20px;
}
</style>