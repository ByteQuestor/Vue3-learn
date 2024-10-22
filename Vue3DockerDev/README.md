# 关于构建Vue3远程开发

> 初始版本MD5值：`31e06415c5bc6b142d482ea057c8388a`

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
-v /root/app:/app vue3_dev:v1
```

注意：仍然有交互式，输一个`Y`即可等待`Vue3`创建一个基本项目

```shell
[root@localhost ~]# docker run -it -p 8080:8080 --name vuetest -e VUE_PROJECT_NAME=my-test-1 -v /root/app:/app vue3_dev:v1
?  Your connection to the default yarn registry seems to be slow.
   Use https://registry.npmmirror.com for faster installation? (Y/n) Y
```

然后远程开发宿主机的`/root/app`中的项目即可，开放的端口是为了访问看效果的，此开发不用进容器
