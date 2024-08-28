<script setup>
import PageIntroduce from '@/components/PageIntroduce.vue'
import MilkTeaRecommend from '@/components/MilkTeaRecommend.vue'

const title = '精选原料，匠心制作，只为给您带来最纯粹的奶茶享受。'
</script>

<template>
  <div class="container">
    <div class="banner"></div>
    <PageIntroduce :title="title"></PageIntroduce>
    <MilkTeaRecommend image-src=""></MilkTeaRecommend>
  </div>
</template>

<style lang="scss" scoped>
.container {
  .banner {
    height: 300px;
    background-image: url('@/assets/drink/drink_banner.png');
  }
}
</style>