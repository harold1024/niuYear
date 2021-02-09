<template>
  <div class="hello">
    <!-- navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      direction="vertical" -->
    <swiper
      class="swiper-main"
      :slides-per-view="1"
      :space-between="50"
      direction="vertical"
      followFinger="false"
      effect="coverflow"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <div class="swiper-slide1 swiper-slide">
          <img class="chatBlock-header" src="../assets/images/xue.jpg" alt="" />
          <section class="chatBlock">
            <!-- <p class="animated fadeIn delay1" style="text-align: center">
              <img src="../assets/images/01.jpg" alt="葛优躺" />
            </p> -->
            <p
              class="them animated fadeIn pulse delay1"
            >
              牛年快乐!
            </p>
            <p class="me animated fadeIn delay2">
              唉,又老了一岁 -_-|||
            </p>
            <p class="them animated fadeIn delay3">
              是又长大了一岁 ?_?
            </p>
            <p class="me animated fadeIn delay4">
              长大有什么好的( # ‵ ′)凸
            </p>
            <p class="them animated fadeIn delay5">
              长大就可以实现愿望了
            </p>
            <p class="me animated fadeIn delay6">
              我的愿望你能实现吗
            </p>
            <p class="them animated fadeIn delay7">
              你有什么愿望?
            </p>
            <p class="me animated fadeIn delay8">
              我的新年愿望是变有钱
            </p>
            <p class="them animated fadeIn delay9">
              这个...有点难
            </p>
            <p class="me animated fadeIn delay10">
              我想要个大红包
            </p>
            <p class="them animated fadeIn delay11">
              我来给你送红包来了 ╰(￣▽￣)╮
            </p>
          </section>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-slide2 swiper-slide">
          <img
            src="../assets/images/b.jpg"
            alt=""
            style="width: 100%; height: 100%"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-slide3 swiper-slide">
          <Draw></Draw>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-slide4 swiper-slide">
          <Robot></Robot>
          <Gsap></Gsap>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-slide5 swiper-slide">
          <img src="../assets/images/cool.jpg" alt="" style="width: 100%" />
          <div>作者: <span>@harold</span></div>
          <div></div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiperBtnNext animated fadeIn delay12">
      <div class="arrow arrow-1"></div>
      <div class="arrow arrow-2"></div>
    </div>
  </div>
</template>

<script>
// import Swiper core and required modules
// Navigation 导航
// Pagination 分页
// Scrollbar  滚动条
// A11y  辅助功能
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import Draw from "../components/draw";
import Robot from "../components/robot";
import Gsap from "../components/demo";
import { wexinShare } from "../api/wx";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// 备注这里导入swiper的样式时，需要在node_modules/swiper中查找对应的样式，因为不同版本色swiper对应的样式文件位置不同
import "swiper/swiper-bundle.css";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default {
  name: "HelloWorld",
  components: { Swiper, SwiperSlide, Draw, Robot, Gsap},
  props: {},
  data() {
    return {};
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
  watch: {
    $route(to, from) {
      console.log(to);
      wexinShare();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/index.scss";
@import "../assets/home.scss";
</style>

