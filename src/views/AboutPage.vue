<script setup>
import { ref } from 'vue'

const imgList = ref([
  {
    imgUrl: new URL('@/assets/about/about_img1.png', import.meta.url).href
  },
  {
    imgUrl: new URL('@/assets/about/about_img2.png', import.meta.url).href
  }
])
</script>

<template>
  <div class="container">
    <div class="banner"></div>
    <div class="content">
      <div class="title">
        <div class="small-check"></div>
        <span>店面介绍</span>
      </div>
      <div class="text">
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      </div>

    </div>
    <div class="pic-group">
      <img v-for="img in imgList" :key="img" :src="img.imgUrl" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 2566px;
  background: #fcffef;
  .banner {
    height: 300px;
    background: url(../assets/about/about_banner.png);
  }

  .content {
    background: #fcffef;
    padding-top: 85px;
    box-sizing: border-box;
    overflow: hidden;
    text-align: center;

    .title {
      height: 48px;
      line-height: 48px;
      box-sizing: border-box;
      font-size: 36px;
      font-family: SourceHanSansSC-regular;
      .small-check {
        width: 4px;
        height: 40px;
        background-color: #101010;
        display: inline-block;
        vertical-align: bottom;
      }

      span {
        margin-left: 15px;
        height: 54px;
        color: #101010;
      }
    }

    .text {
      margin: 30px 120px;
      width: 1200px;
      font-size: 18px;
      color: #AEAEAE;
    }
  }

  .pic-group {
    text-align: center;
    background: #fcffef;
    padding-top: 10px;

    img {
      width: 580px;
      height: 350px;
    }

    img:not(:first-of-type) {
      margin-left: 40px;
    }
  }
}
</style>
