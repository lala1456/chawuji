<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const isCurrentRoute = (path) => route.path === path
//二维码
const qrcode = ref([
  {
    title: '微信公众号',
    imageSrc: new URL('@/assets/img_1.png', import.meta.url).href,
    isFirst: true
  },
  {
    title: '微信小程序',
    imageSrc: new URL('@/assets/img_1.png', import.meta.url).href,
    isFirst: false
  },
  {
    title: '抖音号',
    imageSrc: new URL('@/assets/img_1.png', import.meta.url).href,
    isFirst: false
  }
])
//图标
const ico = ref([
  {
    imageSrc: new URL('@/assets/微信.png', import.meta.url).href,
    isFirst: true
  },
  {
    imageSrc: new URL('@/assets/微博.png', import.meta.url).href,
    isFirst: false
  },
  {
    imageSrc: new URL('@/assets/抖音.png', import.meta.url).href,
    isFirst: false
  }
])
</script>

<template>
  <div class="container">
    <div class="icon" v-if="isCurrentRoute('/home')">
      <img src="@/assets/chawuji.jpg"  alt=""/>
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
        <span class="region">杭州市上城区茶物集食品店</span>
        <div class="other">
          <span>地址：浙江省杭州市上城区雍华里2幢底商2-1、2-2一层</span>
          <span>电话：</span>
          <span>邮箱：</span>
        </div>
        <div class="ico">
          <img
            v-for="i in ico"
            :key="i"
            :src="i.imageSrc"
            :class="{ 'img-not-first': !i.isFirst }"
            alt=""
          />
        </div>
      </div>
      <div class="qrcode-content">
        <div class="qrcode" v-for="qr in qrcode" :key="qr">
          <img
            :src="qr.imageSrc"
            alt=""
            :class="{ 'not-first': !qr.isFirst }"
          />
          <span
            class="title"
            :class="{ 'not-first': !qr.isFirst }"
            v-html="qr.title"
          ></span>
        </div>
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
    background: #2d2d2d;
    box-sizing: border-box;

    .text {
      float: left;
      box-sizing: border-box;
      overflow: hidden;
      margin-top: 96px;
      margin-left: 87px;
      color: #ffffff;

      .region {
        font-size: 20px;
      }

      .other {
        margin-top: 20px;
        font-size: 14px;

        span {
          display: block;
          margin-top: 10px;
        }
      }

      .ico {
        margin-top: 20px;

        img {
          width: 50px;
          height: 50px;
        }

        .img-not-first {
          margin-left: 15px;
        }
      }
    }

    .qrcode-content {
      padding-left: 79px;
      padding-top: 95px;
      box-sizing: border-box;
      overflow: hidden;

      .qrcode {
        float: left;
        box-sizing: border-box;
        overflow: hidden;

        .not-first {
          margin-left: 110px;
        }

        img {
          width: 211px;
          height: 211px;
        }

        .title {
          margin-top: 15px;
          display: block;
          text-align: center;
          font-size: 20px;
          color: white;
        }
      }
    }
  }
}
</style>
