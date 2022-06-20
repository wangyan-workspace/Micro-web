<template>
  <div class="index-container">
    <div class="index-content">
      <NavTitle />
      <IndexAd />
      <CarSwapper />
      <IndexAd />
      <NewsList />
    </div>
    <!-- <div @click="changeNum">
        {{ num }}
    </div> -->
  </div>
</template>

<script>
import { main } from "../../utils/global";
import NavTitle from "./components/navTitle.vue";
import IndexAd from "./components/ad.vue";
import CarSwapper from "./components/carSwapper.vue";
import NewsList from "./components/newsList.vue";

// import { ref } from 'vue';

export default {
  name: "index",
  components: {
    NavTitle,
    IndexAd,
    CarSwapper,
    NewsList,
  },
  setup() {
    // 创建响应式的数据
    // const num = ref(0);
    // console.log(num);

    // const changeNum = () => {
    //     num.value++
    // }
    if (main.appInfo) {
      main.appInfo.crumbsState.setCrumbs([])
    }
    // return {
    //     num,
    //     changeNum
    // }
  },
};
</script>

<style lang="scss">
.index {
  &-container {
    width: 100%;
  }
  &-content {
    width: 1200px;
    margin: 40px auto 0;
  }
}
</style>
