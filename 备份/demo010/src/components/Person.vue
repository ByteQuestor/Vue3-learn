<!--
 * @Author: 【闲鱼】混吃等死真君 【Github】Bytequestor
 * @Date: 2024-12-05 10:14:24
 * @LastEditTime: 2024-12-08 20:32:57
 * @FilePath: \Vue3-learn\hello_vue3\src\components\Person.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by 茉莉花工作室/troml1788, All Rights Reserved. 
-->

<template>
    <div class="person">
        <h1>情况二：【ref】定义的【对象类型】数据</h1>
        姓名：<span>{{ person.name }}</span><br>
        年龄：<span>{{ person.age }}</span><br>
        车：<span>{{ person.car.C1 }} - {{ person.car.C2 }}</span>
        <button @click="changeName">修改名字</button>
        <button @click="addAge">增加年龄</button>
        <button @click="changeC1">修改C1</button>
        <button @click="changeC2">修改C2</button>
        <button @click="changeCar">修改Car</button>
    </div>
</template>

<script setup name="Person">
import { reactive, watch } from 'vue'
let person = reactive({
    name: "王子阳",
    age: 0,
    car: {
        C1: "奥迪",
        C2: "奔驰"
    }
})
function addAge() {
    person.age += 1
}
function changeName() {
    person.name += "~"
}

function changeC1() {
    person.car.C1 = "宝马"
}
function changeC2() {
    person.car.C2 = "法拉利"
}
function changeCar() {
    person.car = { C1: '爱玛', C2: '九号' }
}
watch(()=>person.name,(newVal,oldVal)=>{
    console.log("名字改变了",newVal,oldVal)
})
watch([()=>person.car,()=>person.car.C1],(newCar,oldCar)=>{
    console.log("车被改变了",newCar,oldCar)
},{deep:true})
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