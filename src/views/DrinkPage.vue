<script setup>
import { ref } from 'vue'

const drinkList = ref([
  {
    buttonName: '原叶鲜奶',
    drinks: [
      {
        name: '原叶鲜奶1'
      },
      {
        name: '原叶鲜奶2'
      },
      {
        name: '原叶鲜奶3'
      },
      {
        name: '原叶鲜奶4'
      },
      {
        name: '原叶鲜奶5'
      }
    ],
    img: new URL('@/assets/drink/drink_pic.png', import.meta.url).href
  },
  {
    buttonName: '果茗',
    drinks: [
      {
        name: '果茗1'
      },
      {
        name: '果茗2'
      },
      {
        name: '果茗3'
      },
      {
        name: '果茗4'
      },
      {
        name: '果茗5'
      }
    ],
    img: new URL('@/assets/drink/drink_pic.png', import.meta.url).href
  },
  {
    buttonName: '椰风',
    drinks: [
      {
        name: '原叶鲜奶1'
      },
      {
        name: '原叶鲜奶2'
      },
      {
        name: '原叶鲜奶3'
      },
      {
        name: '原叶鲜奶4'
      },
      {
        name: '原叶鲜奶5'
      }
    ],
    img: new URL('@/assets/drink/drink_pic.png', import.meta.url).href
  },
  {
    buttonName: '季节限定',
    drinks: [
      {
        name: '原叶鲜奶1'
      },
      {
        name: '原叶鲜奶2'
      },
      {
        name: '原叶鲜奶3'
      },
      {
        name: '原叶鲜奶4'
      },
      {
        name: '原叶鲜奶5'
      }
    ],
    img: new URL('@/assets/drink/drink_pic.png', import.meta.url).href
  },
  {
    buttonName: '更多',
    drinks: [
      {
        name: '原叶鲜奶1'
      },
      {
        name: '原叶鲜奶2'
      },
      {
        name: '原叶鲜奶3'
      },
      {
        name: '原叶鲜奶4'
      },
      {
        name: '原叶鲜奶5'
      }
    ],
    img: new URL('@/assets/drink/drink_pic.png', import.meta.url).href
  }
])
const activeButton = ref(0)
const changeButton = (index) => {
  activeButton.value = index
}
</script>

<template>
  <div class="container">
    <div class="banner"></div>
    <div class="drink-intro">
      <div class="left-text">
        <div class="button-group">
          <div
            class="button"
            v-for="drink in drinkList"
            :key="drink"
            v-html="drink.buttonName"
            @click="changeButton(drinkList.indexOf(drink))"
          ></div>
        </div>
        <div class="drink-list">
          <div
            class="drink-name"
            v-for="name in drinkList[activeButton].drinks"
            :key="name"
            v-html="name.name"
          ></div>
        </div>
      </div>
      <div class="right-img">
        <img :src="drinkList[activeButton].img" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background: #fcffef;

  .banner {
    height: 300px;
    background-image: url('@/assets/drink/drink_banner.png');
  }

  .drink-intro {
    margin-top: 52px;
    box-sizing: border-box;
    overflow: hidden;

    .left-text {
      float: left;
      //按钮样式
      .button-group {
        margin-left: 63px;
        display: inline-block;

        .button {
          background: #ffffff;
          float: left;
          color: #85be55;
          font-size: 28px;
          font-family: 'Roboto';
          width: 74px;
          height: 74px;
          border: 1px solid #85be55;
          text-align: center;
          line-height: 74px;
          border-radius: 10px;
        }

        //排除第一个按钮
        .button:not(:first-of-type) {
          margin-left: 18.25px;
        }

        //排除最后一个按钮
        .button:not(:last-of-type) {
          width: 162px;
        }

        .button:hover {
          background: #85be55;
          color: #fff;
          transition: all 0.3s ease-in-out;
        }
      }

      //饮品列表样式
      .drink-list {
        padding-top: 151px;
        padding-bottom: 311px;
        box-sizing: border-box;
        overflow: hidden;
        margin-left: 178px;

        .drink-name {
          width: 28px;
          height: 225px;
          float: left;
          writing-mode: vertical-lr;
          text-orientation: upright;
          font-size: 28px;
          color: #85BE55;
          letter-spacing: 16px;
        }

        .drink-name:not(:first-of-type) {
          margin-left: 112px;
        }
      }
    }

    .right-img {
      float: right;

      img {
        width: 544px;
        height: 735px
      }
    }
  }
}
</style>
