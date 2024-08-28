<script setup>
import MilkTeaRecommend from '@/components/MilkTeaRecommend.vue'
import PageIntroduce from '@/components/PageIntroduce.vue'
import { ref } from 'vue'
const list = ref([
  {
    title: '奶茶1',
    burdening: '配方：',
    description:
      '功效：这是杨晓锋在搅拌机里疯狂搅才得到的一点点珍贵的茶，这种经过搅拌获得的杨晓锋茶汤会更加的具有嚼劲，而且闻起来的那一股杨晓锋香是久久不散的，萦绕在房间的每一个角落。\n',
    imageSrc: new URL('@/assets/home/home_pic.png', import.meta.url).href
  },
  {
    title: '奶茶2',
    burdening: '配方：',
    description:
      '含有比较丰富的蛋白质、氨基酸以及各种微量元素，适当的喝一些，能够达到补充身体所需营养的效果。',
    imageSrc: new URL('@/assets/home/home_pic.png', import.meta.url).href,
    isImageRight: true
  },
  {
    title: '奶茶3',
    burdening: '配方：',
    description:
      '含有比较丰富的蛋白质、氨基酸以及各种微量元素，适当的喝一些，能够达到补充身体所需营养的效果。',
    imageSrc: new URL('@/assets/home/home_pic.png', import.meta.url).href
  },
  {
    title: '奶茶4',
    burdening: '配方：',
    description:
      '含有比较丰富的蛋白质、氨基酸以及各种微量元素，适当的喝一些，能够达到补充身体所需营养的效果。',
    imageSrc: new URL('@/assets/home/home_pic.png', import.meta.url).href,
    isImageRight: true
  }
])
</script>

<template>
  <div>
    <div class="banner">
      <el-carousel :interval="5000" arrow="always" height="721px">
        <el-carousel-item v-for="item in 4" :key="item">
          <img src="../assets/home_banner.png" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <PageIntroduce></PageIntroduce>
    <div class="title">
      <div class="small-check"></div>
      <span>招牌</span>推荐
    </div>
    <div style="background: #fcffef; padding-bottom: 66px">
      <MilkTeaRecommend
        v-for="l in list"
        :key="l.name"
        :title="l.title"
        :burdening="l.burdening"
        :description="l.description"
        :image-src="l.imageSrc"
        :is-image-right="l.isImageRight"
        
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 721px;
}
.title {
  padding-left: 80px;
  height: 50px;
  color: black;
  font-size: 48px;
  box-sizing: border-box;
  background: #fcffef;
  line-height: 50px;
  .small-check {
    width: 5px;
    height: 50px;
    background-color: #90c463;
    display: inline-block;
    vertical-align: bottom;
  }
  span {
    margin-left: 10px;
    height: 50px;
    color: #87bf58;
  }
}
</style>
