<!--
 * @Author: 【闲鱼】混吃等死真君 【Github】Bytequestor
 * @Date: 2024-12-05 10:14:24
 * @LastEditTime: 2024-12-07 21:24:42
 * @FilePath: \Vue3-learn\hello_vue3\src\components\Person.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by 茉莉花工作室/troml1788, All Rights Reserved. 
-->

<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script setup name="Person">
    import {reactive, toRef, toRefs} from "vue"
    let person = reactive ({
        name : "王子阳",
        age : 22
    })
    let {name,age} = toRefs(person)
    let nos = toRef(person,'age')
    console.log("xx" + nos.value)
    function changeName(){
        name.value += "+"
        console.log("xx" + name.value)
    }
    function changeAge(){
        age.value +=1
        
        console.log(age.value)
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