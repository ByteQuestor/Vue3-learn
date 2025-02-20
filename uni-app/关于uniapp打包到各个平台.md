# 关于uniapp打包到各个平台

# 一、Android平台App本地离线打包

https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android.html

> 准备工作（简单说就是，下载工具，创建一个安卓工程）
>
> https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android.html

## 1.1，资源准备

+ `HBuilderX 4.45`【注意版本号要与**`App`离线`SDK`**版本一致】
  ![image-20250220142913532](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220142913532.png)
+ `App`离线`SDK`，**注意要用`4.45`版本**
+ `Android Studio`随便去官网下载即可，官网地址：[下载 Android Studio 和应用工具 - Android 开发者  | Android Developers](https://developer.android.google.cn/studio?hl=zh-cn)

> 大致流程：
>
> 使用**`Android Studio`**打开**`App`离线`SDK`**（内提供的一个模板），然后再将我们使用**`HBuilderX`生成的资源放到模板**里，再打包成`apk`

## 1.2，修改配置文件

解压下载的**`App`离线`SDK`**，下面这个就是模板，将这个模板复制到到一个没有中文的路径下，再用**`Android Studio`**打开

![image-20250220144350903](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220144350903.png)

### 1.2.1，修改下载源

> 在`\HBuilder-Integrate-AS\gradle\wrapper\gradle-wrapper.properties`中修改编译工具下载源为国内源，不然很慢

```ini
distributionUrl=https\://services.gradle.org/distributions/gradle-8.11.1-bin.zip
```

更换为

```ini
distributionUrl=https\://mirrors.tencent.com/gradle/gradle-8.11.1-bin.zip
```

### 1.2.2，修改**`Android Studio`**配置

**注意：**之所以`JDK`是`1.8`是因为`\HBuilder-Integrate-AS\simpleDemo\build.gradle`中的编译版本是`1.8`

![image-20250220150820681](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220150820681.png)

![image-20250220150615598](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220150615598.png)

## 1.3，创建离线`key`

> 需要注册一个DCLOUD账号，如果进入后台后发现没有应用，是因为没有登录HBuilderX，登陆后，按下图操作获取

![image-20250220151558848](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220151558848.png)

### 1.3.1，需要更换变量

> 文件位置：`\HBuilder-Integrate-AS\simpleDemo\src\main\AndroidManifest.xml`

![image-20250220151206239](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220151206239.png)

### 1.3.2，生成云证书

> 此云证书是打包安卓必须的

![image-20250220151831919](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220151831919.png)

![image-20250220151802729](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220151802729.png)

![image-20250220152002935](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220152002935.png)

### 1.3.3，提取证书信息

> 需要如下五个信息，找个记事本先存起来

```tex
别名： __uni__fa0d0fd
MD5: xxxxx
SHA1: xxxxx
SHA256: xxxxx

证书密码：点击提示框下方的《查看证书密码》获取
```

![image-20250220152342450](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220152342450.png)

### 1.3.4.创建离线key

![image-20250220152942343](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220152942343.png)

> 注意记录下**包名**

![image-20250220152637862](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220152637862.png)

![image-20250220153038827](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220153038827.png)

![image-20250220153551359](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220153551359.png)

将上图中`①`的内容复制到`1.3.1`中的，`android:value="开发者需登录https://dev.dcloud.net.cn/申请签名"`

### 1.3.5，修改uniappID

> 修改位置：`\HBuilder-Integrate-AS\simpleDemo\src\main\assets\data\dcloud_control.xml`

顺便将`1.3.4`最后一图的`appid`复制到

![image-20250220154300972](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220154300972.png)

复制到

![image-20250220154540995](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220154540995.png)

### 1.3.6，修改应用名字【这一步跟视频不一样，如果出问题就是这里】

>  修改位置：`\HBuilder-Integrate-AS\simpleDemo\src\main\res\values\strings.xml`

![image-20250220153931571](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220153931571.png)

### 1.3.7，修改应用包名

> 修改位置：`\HBuilder-Integrate-AS\simpleDemo\build.gradle`
>
> **注意：这里写的有误，注释的那一行也应该修改为包名，和第8行的包名一样**

![image-20250220154907912](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220154907912.png)

## 1.4，下载证书覆盖

将下载的证书命名为`test.jks`，并到`\HBuilder-Integrate-AS\simpleDemo`下面替换`test.jks`

### 1.4.1，修改配置文件

> 从上到下依次是别名、密码、文件名不变、密码**【1.3.3】提取的证书信息**

![image-20250220155404612](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220155404612.png)

## 1.5，本地打包

### 1.5.1，清除模板中的内容

![image-20250220155806146](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220155806146.png)

### 1.5.2，`HBuilderX`本地打包

![image-20250220155909317](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220155909317.png)

![image-20250220160043187](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220160043187.png)

![image-20250220160118773](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220160118773.png)

### 1.5.3，选择`release`打包模式

> 如果一开始没更换国内源，这一步就很慢

![image-20250220160234358](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220160234358.png)

![image-20250220160345708](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220160345708.png)

### 1.5.4，打包APK

![image-20250220160417592](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220160417592.png)

点击后静待打包完成，如下图的`build`中就是我们的`apk`

![image-20250220160757720](./%E5%85%B3%E4%BA%8Euniapp%E6%89%93%E5%8C%85%E5%88%B0%E5%90%84%E4%B8%AA%E5%B9%B3%E5%8F%B0.assets/image-20250220160757720.png)