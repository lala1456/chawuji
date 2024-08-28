<script setup>
import PageIntroduce from '@/components/PageIntroduce.vue'
import MilkTeaRecommend from '@/components/MilkTeaRecommend.vue'
import { ref } from 'vue'
const title = '精选原料，匠心制作，只为给您带来最纯粹的奶茶享受。'
const IngredientList = ref([
  {
    title: "选用<span style='color:#85be55'>优质</span>茶叶",
    burdening: "<span style='color:#191918;font-size:14px;'> 来自东韵堂的高级茶叶</span>",
    description:
      ' 根据查询相关资料信息，东韵养生茶是国内十\
大养生茶品牌之一，含有多种人体氨基酸，铁，钙\
等微量元素，营养丰富，清香好喝。含有玛卡、\
黄精、枸杞、桑葚、红枣等几种中药成分，有\
补肾、去疲劳的功效，还可以改善身体状况。\
    ',
    imageSrc: new URL('@/assets/home/home_pic.png', import.meta.url).href,
    isImageRight: true
  },
  {
    title: "选用<span style='color:#85be55'>优质</span>鲜牛奶",
    burdening: "<span style='color:#191918;font-size:14px;'> 来自东韵堂的高级茶叶</span>",
    description:
      ' 根据查询相关资料信息，东韵养生茶是国内十\
大养生茶品牌之一，含有多种人体氨基酸，铁，钙\
等微量元素，营养丰富，清香好喝。含有玛卡、\
黄精、枸杞、桑葚、红枣等几种中药成分，有\
补肾、去疲劳的功效，还可以改善身体状况。',
    imageSrc: new URL('@/assets/home/home_pic.png', import.meta.url).href,
    isImageRight: false
  },
  {
    title: "选用<span style='color:#85be55'>进口</span>奶粉",
    burdening: "<span style='color:#191918;font-size:14px;'> 来自东韵堂的高级茶叶</span>",
    description:
      '根据查询相关资料信息，东韵养生茶是国内十\
大养生茶品牌之一，含有多种人体氨基酸，铁，钙\
等微量元素，营养丰富，清香好喝。含有玛卡、\
黄精、枸杞、桑葚、红枣等几种中药成分，有\
补肾、去疲劳的功效，还可以改善身体状况。',
    imageSrc: new URL('@/assets/home/home_pic.png', import.meta.url).href,
    isImageRight: true
  }
])
</script>

<template>
  <div class="container">
    <div class="banner"></div>
    <PageIntroduce :title="title"></PageIntroduce>
    <div class="ingredient-list">
      <MilkTeaRecommend
        v-for="l in IngredientList"
        :key="l.name"
        :title="l.title"
        :burdening="l.burdening"
        :rowGap="300"
        :line-gap="10"
        imageWidth="400px"
        imageHeight="400px"
        :description="l.description"
        :image-src="l.imageSrc"
        :is-image-right="l.isImageRight"
        circle
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  .banner {
    height: 300px;
    background-image: url('@/assets/drink/drink_banner.png');
  }
}
</style>
