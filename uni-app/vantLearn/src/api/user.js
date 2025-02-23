/*
 * @Author: 【闲鱼】混吃等死真君 【Github】Bytequestor
 * @Date: 2025-02-23 17:23:48
 * @LastEditTime: 2025-02-23 17:41:04
 * @FilePath: \vantLearn\src\api\user.js
 * @Description: 
 * 
 * Copyright (c) 2025 by 茉莉花工作室/troml1788, All Rights Reserved. 
 */
import request from "../utils/request.js"
export const login = (data) => {
	return request({
        method: "post",
		url: "/user/login",
        data,
	})
}