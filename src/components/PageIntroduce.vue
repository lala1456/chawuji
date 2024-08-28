<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: '茶物集，荟萃优质茶叶，满足您的味蕾渴望。'
  }
})
console.log(props)
</script>
<template>
  <div class="page-introduce">
    <span>{{ title }}</span>
  </div>
</template>

<style scoped>
.page-introduce {
  width: 100%;
  height: 120px;
  line-height: 120px;
  background-color: #fcffef;
  color: #8fc04e;
  font-size: 36px;
  text-align: center;
}
</style>
