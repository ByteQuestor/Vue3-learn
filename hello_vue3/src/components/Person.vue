<!--
 * @Author: 【闲鱼】混吃等死真君 【Github】Bytequestor
 * @Date: 2024-12-05 10:14:24
 * @LastEditTime: 2024-12-05 11:10:02
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
        <button @click="showTel">显示电话</button>
    </div>
</template>

<script>
export default{
    name:'Persion',
    setup(){
        //这里的变量不是响应式的
        let name = '张三'
        let age = 18
        let tel = '1000000'
        
        //方法
        function changeName(){
            name = "王子阳"
            console.log(name) //确实修改了，但是页面没变化，因为变量不是响应式的
        }
        function changeAge(){
            age += 1
            console.log(age)
        }
        function showTel(){
            alert(tel)
        }
        return {
            name,age,tel,
            changeName,changeAge,showTel
        }
    }
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
</style>