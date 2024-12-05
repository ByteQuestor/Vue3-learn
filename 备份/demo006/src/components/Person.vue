<!--
 * @Author: 【闲鱼】混吃等死真君 【Github】Bytequestor
 * @Date: 2024-12-05 10:14:24
 * @LastEditTime: 2024-12-05 16:08:04
 * @FilePath: \Vue3-learn\hello_vue3\src\components\Person.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by 茉莉花工作室/troml1788, All Rights Reserved. 
-->

<template>
    <div class="person">
        <h1>一辆{{ car.brand }}车，价格是{{ car.price }}万</h1>
        <button @click="chancePrice">增加十万块</button>
        <ul>
            <li v-for="g in games" :key="g.id" >
                {{ g.name }}
            </li>
        </ul>
        <button @click="chanceFirstGamename">修改第一个游戏的名字</button>
    </div>
</template>

<script setup name="Person">
import { ref } from 'vue';
    let car =  ref({
        brand:'奔驰',
        price:100
    })
    let games = ref([
    {id:"wzy01",name:"王者荣耀"},
    {id:"wzy02",name:"元神"},
    {id:"wzy03",name:"黑神话"},
    ])
    function chancePrice(){
        car.value.price +=10
        console.log(car.value.price)
    }
    function chanceFirstGamename(){
        games.value[0].name = '流星蝴蝶剑'
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