/*
 * @Author: 【闲鱼】混吃等死真君 【Github】Bytequestor
 * @Date: 2025-02-23 14:47:16
 * @LastEditTime: 2025-02-23 15:13:59
 * @FilePath: \vantLearn\postcss.config.cjs
 * @Description: 
 * 
 * Copyright (c) 2025 by 茉莉花工作室/troml1788, All Rights Reserved. 
 */
module.exports = {
    plugins: {
      // postcss-pxtorem 插件的版本需要 >= 5.0.0
      'postcss-pxtorem': {
        rootValue({ file }) {
          return file.indexOf('vant') !== -1 ? 37.5 : 75;
        },
        propList: ['*'],
      },
    },
  };