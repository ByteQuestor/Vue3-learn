/*
 * @Author: 【闲鱼】混吃等死真君 【Github】Bytequestor
 * @Date: 2025-02-24 16:19:09
 * @LastEditTime: 2025-02-24 16:21:41
 * @FilePath: \vantLearn\src\utils\storage.js
 * @Description: 
 * 
 * Copyright (c) 2025 by 茉莉花工作室/troml1788, All Rights Reserved. 
 */

//存储数据
export const setItem = (key, value) => {
    if (typeof value === 'object') {
        value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
};

//获取数据
export const getItem = (key) => {
    const data = window.localStorage.getItem(key)
    /**
     * 小技巧，可以尝试把数据转为对象，如果成功，就返回对象，如果失败，就返回字符串
     */
    try {
        return JSON.parse(data)
    } catch (e) {
        return data
    }
};

//删除数据
export const removeItem = (key) => {
    window.localStorage.removeItem(key)
};