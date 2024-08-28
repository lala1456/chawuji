<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

// 定义组件的属性类型
interface DrinkDisplayProps {
  customStyles?: Record<string, any>
  title?: string
  burdening?: string
  description?: string
  imageSrc: string
  isImageRight?: boolean
  circle?: boolean
  rowGap: number
  lineGap: number
  imageWidth: string
  imageHeight: string
}

// 定义组件的属性，并提供默认值
const props = withDefaults(defineProps<DrinkDisplayProps>(), {
  title: '奶茶1',
  burdening: '配方：',
  description:
    '含有比较丰富的蛋白质、氨基酸以及各种微量元素，适当的喝一些，能够达到补充身体所需营养的效果。',
  isImageRight: false,
  circle: false,
  rowGap: 75,
  lineGap: 30,
  imageWidth: '700px',
  imageHeight: 'auto'
})
</script>

<template>
  <div
    class="drink-display"
    :style="'gap:' + rowGap + 'px'"
    :class="isImageRight ? 'flex-reverse' : ''"
  >
    <div class="text" :style="'gap:' + lineGap + 'px'">
      <h2 class="title" v-html="title"></h2>
      <p class="burdening" v-html="burdening"></p>
      <p class="description" v-html="description"></p>
    </div>
    <div class="image" :style="'width:' + imageWidth + ';height:' + imageHeight">
      <img :class="circle ? 'radius-image' : ''" :src="imageSrc" :alt="title" />
      <div class="white-circle" v-show="circle"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.drink-display {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 500px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #fcffef;
  padding: 0 120px;
  &.flex-reverse {
    flex-direction: row-reverse;
  }

  .text {
    flex: 0 0 424px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-weight: 600;
    h2,
    p {
      margin: 0;
    }
    .title {
      font-size: 36px;
    }

    .burdening,
    .description {
      font-size: 18px;
      color: #aeaeae;
    }

    .description {
      color: #333;
    }
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .white-circle {
      border-radius: 50%;
      border: 3px solid white;
      width: 95%;
      height: 95%;
      z-index: 999;
      position: absolute;
    }
    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      &.radius-image {
        border-radius: 50%;
      }
    }
  }
}
</style>
