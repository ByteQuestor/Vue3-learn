# 打包基于`vite`开发的`vue3+vant`项目

> 主要记录为什么打包后白屏

![image-20250225213526676](./%E6%89%93%E5%8C%85%E5%9F%BA%E4%BA%8Evite%E5%BC%80%E5%8F%91%E7%9A%84vue3+vant%E9%A1%B9%E7%9B%AE.assets/image-20250225213526676.png)

# 一、编译`vue3`项目

```shell
npm run build
```

![image-20250225142148368](./%E6%89%93%E5%8C%85%E5%9F%BA%E4%BA%8Evite%E5%BC%80%E5%8F%91%E7%9A%84vue3+vant%E9%A1%B9%E7%9B%AE.assets/image-20250225142148368.png)

#二、使用`HBuilderX`创建`5+APP`

> 默认模板，选好项目位置

![image-20250225142034112](./%E6%89%93%E5%8C%85%E5%9F%BA%E4%BA%8Evite%E5%BC%80%E5%8F%91%E7%9A%84vue3+vant%E9%A1%B9%E7%9B%AE.assets/image-20250225142034112.png)

# 三、替换文件

把`dist`内的内容，放到

![image-20250225142318050](./%E6%89%93%E5%8C%85%E5%9F%BA%E4%BA%8Evite%E5%BC%80%E5%8F%91%E7%9A%84vue3+vant%E9%A1%B9%E7%9B%AE.assets/image-20250225142318050.png)

# 四、修改配置文件

> 主要是修改`manifest.json`

如果登录了`HBuilderX`就会自动申请

![image-20250225142453237](./%E6%89%93%E5%8C%85%E5%9F%BA%E4%BA%8Evite%E5%BC%80%E5%8F%91%E7%9A%84vue3+vant%E9%A1%B9%E7%9B%AE.assets/image-20250225142453237.png)

生成图标

![image-20250225142804766](./%E6%89%93%E5%8C%85%E5%9F%BA%E4%BA%8Evite%E5%BC%80%E5%8F%91%E7%9A%84vue3+vant%E9%A1%B9%E7%9B%AE.assets/image-20250225142804766.png)

![image-20250225142825323](./%E6%89%93%E5%8C%85%E5%9F%BA%E4%BA%8Evite%E5%BC%80%E5%8F%91%E7%9A%84vue3+vant%E9%A1%B9%E7%9B%AE.assets/image-20250225142825323.png)

# 五、开始打包

![image-20250225143125384](./%E6%89%93%E5%8C%85%E5%9F%BA%E4%BA%8Evite%E5%BC%80%E5%8F%91%E7%9A%84vue3+vant%E9%A1%B9%E7%9B%AE.assets/image-20250225143125384.png)

![image-20250225143013427](./%E6%89%93%E5%8C%85%E5%9F%BA%E4%BA%8Evite%E5%BC%80%E5%8F%91%E7%9A%84vue3+vant%E9%A1%B9%E7%9B%AE.assets/image-20250225143013427.png)

点击打包会提示让下载个插件

![image-20250225143214955](./%E6%89%93%E5%8C%85%E5%9F%BA%E4%BA%8Evite%E5%BC%80%E5%8F%91%E7%9A%84vue3+vant%E9%A1%B9%E7%9B%AE.assets/image-20250225143214955.png)

> 线上打包就是比较省心，但是就是要排队，不方便我们进行调试等，因此应当尽快研究离线打包
