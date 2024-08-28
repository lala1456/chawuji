<script setup>
import { useRoute } from 'vue-router'

// 获取当前路由
const route = useRoute()

// 函数：判断当前路由路径是否为指定路径
const isCurrentRoute = (path) => route.path === path
</script>

<template>
  <div class="container">
    <div class="icon" v-if="isCurrentRoute('/home')">
      <img src="@/assets/chawuji.jpg" />
    </div>
    <div class="header">
      <div class="header-left">
        <span class="header-title">茶物汇集·源自生态</span>
      </div>
      <div class="header-right">
        <nav class="header-nav">
          <router-link to="/home" class="nav-link active">首页</router-link>
          <router-link to="/drink" class="nav-link">饮品展示</router-link>
          <router-link to="/ingredient" class="nav-link">原料展示</router-link>
          <router-link to="/brand" class="nav-link">品牌展示</router-link>
          <router-link to="/about" class="nav-link">关于我们</router-link>
        </nav>
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <footer class="footer">
      <div class="text">
        <span>杭州市上城区茶物集食品店</span>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
.container {
  width: 1440px;
  margin: 0 auto;


  .icon {
    padding-top: 20px;
    text-align: center;
    background-color: #fcffef;

    img {
      width: 173px;
      height: 173px;
    }
  }

  .header {
    width: 100%;
    background-color: #fcffef;
    height: 120px;
    line-height: 120px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .header-left {
    float: left;
    width: 30%;

    .header-title {
      color: #8fc04e;
      font-size: 36px;
      margin-left: 63px;
    }
  }

  .header-right {
    float: right;
    width: 70%;
    text-align: right;


    .header-nav {
      margin-right: 80px;
      display: inline-block;

      .nav-link {
        font-size: 28px;
        color: black;
        margin-left: 20px;
        text-decoration: none;
      }

      .nav-link.active {
        color: #8fc04e;
      }
    }
  }


  .footer {
    height: 400px;
    width: 100%;
    background: #2D2D2D;
    box-sizing: border-box;
    .text{
      color: #ffffff;
    }
  }
}
</style>
