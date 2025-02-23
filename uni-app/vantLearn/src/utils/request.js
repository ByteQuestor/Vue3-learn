/*
 * @Author: 【闲鱼】混吃等死真君 【Github】Bytequestor
 * @Date: 2025-02-23 15:18:33
 * @LastEditTime: 2025-02-23 17:55:30
 * @FilePath: \vantLearn\src\utils\request.js
 * @Description: 
 * 
 * Copyright (c) 2025 by 茉莉花工作室/troml1788, All Rights Reserved. 
 */
import axios from "axios";
//创建了一个request实例
const request = axios.create({
  baseURL:"http://localhost:8000",
  //请求拦截器
  //响应拦截器
});
export default request;