/*
 * @Author: 【闲鱼】混吃等死真君 【Github】Bytequestor
 * @Date: 2025-02-24 15:43:03
 * @LastEditTime: 2025-02-24 16:04:08
 * @FilePath: \vantLearn\src\store\index.js
 * @Description: 
 * 
 * Copyright (c) 2025 by 茉莉花工作室/troml1788, All Rights Reserved. 
 */
import { createStore } from 'vuex';
const TOKEN_KEY = "ADMIN_USER_TOKEN"
const store = createStore({
    state: {
        user: JSON.parse(window.localStorage.getItem(TOKEN_KEY))
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            console.log(state.user)
            window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
        }
    }
})

export default store;
