<!--
 * @Author: 【闲鱼】混吃等死真君 【Github】Bytequestor
 * @Date: 2024-12-05 10:14:24
 * @LastEditTime: 2024-12-05 16:37:54
 * @FilePath: \Vue3-learn\hello_vue3\src\components\Person.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by 茉莉花工作室/troml1788, All Rights Reserved. 
-->

<template>
    <div class="person">
        <h1>一辆{{ car.brand }}车，价格是{{ car.price }}万</h1>
        
        <button @click="changeCarName">修改名字</button>
        <button @click="chanceCarPrice">增加十万块</button>
        <button @click="chanceCar">换车</button>
        <ul>
            <li v-for="g in games" :key="g.id" >
                {{ g.name }}
            </li>
        </ul>
    </div>
</template>

<script setup name="Person">
import { reactive } from 'vue';
    let car =  reactive({
        brand:'奔驰',
        price:100
    })
    function changeCarName(){
        car.brand = "宝马"
    }
    function chanceCarPrice(){
        car.price += 10
    }
    function chanceCar(){
        Object.assign(car,{
        brand:'奥迪',
        price:200
    })
    }
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