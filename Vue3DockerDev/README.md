# 关于构建Vue3远程开发

```dockerfile
# 使用官方 Node.js 镜像
FROM node:20.18.0

# 创建工作目录
WORKDIR /app

# 设置 npm 镜像为淘宝源
RUN npm config set registry http://registry.npm.taobao.org

# 安装 Vue CLI
RUN npm install -g @vue/cli

# 暴露开发服务器端口
EXPOSE 8080

# 启动 Vue 应用的命令
CMD ["sh", "-c", "vue create $VUE_PROJECT_NAME --default && cd $VUE_PROJECT_NAME && npm install vue@3.2.47 && npm install && npm run serve"]
```

构建镜像

```shell
docker build -t vue3_dev:v1 .
```

验证

```shell
docker run -it -p 8080:8080 \
--name vuetest \
-e VUE_PROJECT_NAME=my-test-1 \
-v /root/app:/app vue3-dev:v1
```

