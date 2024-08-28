<script setup>
import { defineProps } from 'vue'

// 定义组件的属性
const props = defineProps({
  title: {
    type: String,
    default: '奶茶1'
  },
  burdening: {
    type: String,
    default: '配方：'
  },
  description: {
    type: String,
    default:
      '含有比较丰富的蛋白质、氨基酸以及各种微量元素，适当的喝一些，能够达到补充身体所需营养的效果。'
  },
  imageSrc: {
    type: String,
    required: true // 确保图片路径是必填的
  },
  isImageRight: {
    type: Boolean,
    default: false // 默认为图片在左边
  }
})
console.log(props)
</script>
<template>
  <div class="drink-display">
    <div
      class="text"
      :class="{ 'text-right': isImageRight, 'text-left': !isImageRight }"
    >
      <h2 class="title">{{ title }}</h2>
      <p class="burdening">{{ burdening }}</p>
      <p class="description">
        {{ description }}
      </p>
    </div>
    <div
      class="image"
      :class="{ 'image-left': isImageRight, 'image-right': !isImageRight }"
    >
      <img :src="imageSrc" :alt="title" />
    </div>
  </div>
</template>
<style scoped>
.drink-display {
  height: 500px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #fcffef;
}

.text {
  width: 424px;
  box-sizing: border-box;
  .title {
    font-size: 36px;
  }
  .burdening {
    font-size: 18px;
    color: #aeaeae;
  }
  .description {
    font-size: 18px;
    width: 424px;
  }
}

.image {
  width: 700px;
  position: relative;
  margin-top: 85px;
}
.image-right {
  float: right;
  margin-right: 120px;
}
.image-left {
  float: left;
  margin-left: 120px;
}

.text-right {
  float: right;
  text-align: left;
  margin: 197px 120px 0 0;
}
.text-left {
  margin: 197px 0 0 136px;
  float: left;
}
</style>
