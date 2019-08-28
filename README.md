# 生活小助手
这是一个基于Vue的前端项目，通过这个项目可以达到一个Vue入门的效果，只做了首页部分，包括7个二级页面的开发，
可以实现看天气预报、阅读新闻、查询垃圾分类、查看附近景点等功能，代码量5千行的水平。

## 开发环境：
   Vue.js 2.96  VScode  node.js

## 辅助工具：
   vue-cli,webpack

## 用到的核心插件：
  Vue-router,axios,Vuex，better-scroll,vue-lazyload 

## 后端
用的是Springboot+Mysql+Mybatis,做了一个简易的垃圾数据库，可以通过前端访问实现垃圾分类的功能。
由于后端代码很少，就没有往上面贴了。

## API选择：
   这里有几个地方用到了免费的API接口
   
   背景壁纸接口：必应壁纸https://api.neweb.top/bing.php?type=rand
   
   天气预报接口：极速数据https://api.jisuapi.com 新用户可以免费申请1千次的访问量，后续需要缴费；也可以用免费的心知天气接口
                https://www.seniverse.com 但是数据项没有那么多，可以用来学习。
                
   新闻接口:极速数据https://api.jisuapi.com 每天有100次的免费访问量
   
## 项目展示：
  ### 首页部分：
  ![image](https://github.com/tsenglying-SH/assistant/blob/master/images/51.jpg)
  
   ### 天气详情：
  ![image](https://github.com/tsenglying-SH/assistant/blob/master/images/52.png)
  
   ### 添加/删除城市：
 ![image](https://github.com/tsenglying-SH/assistant/blob/master/images/53.png)
 
  ### 城市列表详情：
  ![image](https://github.com/tsenglying-SH/assistant/blob/master/images/54.png)
  
   ### 垃圾分类：
  ![image](https://github.com/tsenglying-SH/assistant/blob/master/images/55.png)
  
   ### 垃圾分类详情：
  ![image](https://github.com/tsenglying-SH/assistant/blob/master/images/56.png)
  
   ### 天气详情：
  ![image](https://github.com/tsenglying-SH/assistant/blob/master/images/52.png)
  
   ### 景点详情：
  ![image](https://github.com/tsenglying-SH/assistant/blob/master/images/64.png)
  
   ### 新闻列表：
  ![image](https://github.com/tsenglying-SH/assistant/blob/master/images/66.png)
 
  ### 新闻详情：
  ![image](https://github.com/tsenglying-SH/assistant/blob/master/images/67.png)
> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
