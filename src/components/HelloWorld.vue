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
        <div class="swiper-slide1 swiper-slide">1</div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-slide2 swiper-slide">2</div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-slide3 swiper-slide">3</div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-slide4 swiper-slide">4</div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-slide5 swiper-slide">5</div>
      </swiper-slide>
    </swiper>
    <div class="swiperBtnNext animated bounceInUp delay6">
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
  components: { Swiper, SwiperSlide },
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body {
  margin: 0px;
  padding: 0px;
}
.swiper-main {
  width: 100%;
  height: 100%;
  position: absolute;
  // overflow: hidden;
}
.swiper-slide {
  height: 100%;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiperBtnNext {
  position: fixed;
  bottom: 10%;
  width: 100%;
  height: 60px;
}
.swiperBtnNext .arrow {
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -15px;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}

.swiperBtnNext .arrow-1 {
  -webkit-animation: arrow-movement 2s ease-in-out infinite;
  animation: arrow-movement 2s ease-in-out infinite;
}

.swiperBtnNext .arrow-2 {
  -webkit-animation: arrow-movement 2s 1s ease-in-out infinite;
  animation: arrow-movement 2s 1s ease-in-out infinite;
  top: 60%;
}

.swiperBtnNext .arrow:before,
.swiperBtnNext .arrow:after {
  background: #000;
  content: "";
  display: block;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
}

.swiperBtnNext .arrow:before {
  -webkit-transform: rotate(45deg) translateX(-23%);
  transform: rotate(45deg) translateX(-23%);
  -webkit-transform-origin: top left;
  transform-origin: top left;
}

.swiperBtnNext .arrow:after {
  -webkit-transform: rotate(-45deg) translateX(23%);
  transform: rotate(-45deg) translateX(23%);
  -webkit-transform-origin: top right;
  transform-origin: top right;
}
.delay6 {
  -webkit-animation-delay: 6s; /* Chrome, Safari, Opera */
  animation-delay: 6s;
}

.swiperBtnNext .arrow {
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -15px;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}

.swiperBtnNext .arrow-1 {
  -webkit-animation: arrow-movement 2s ease-in-out infinite;
  animation: arrow-movement 2s ease-in-out infinite;
}

.swiperBtnNext .arrow-2 {
  -webkit-animation: arrow-movement 2s 1s ease-in-out infinite;
  animation: arrow-movement 2s 1s ease-in-out infinite;
  top: 60%;
}

.swiperBtnNext .arrow:before,
.swiperBtnNext .arrow:after {
  background: #000;
  content: "";
  display: block;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
}

.swiperBtnNext .arrow:before {
  -webkit-transform: rotate(45deg) translateX(-23%);
  transform: rotate(45deg) translateX(-23%);
  -webkit-transform-origin: top left;
  transform-origin: top left;
}

.swiperBtnNext .arrow:after {
  -webkit-transform: rotate(-45deg) translateX(23%);
  transform: rotate(-45deg) translateX(23%);
  -webkit-transform-origin: top right;
  transform-origin: top right;
}

@-webkit-keyframes arrow-movement {
  0% {
    opacity: 0;
    top: 45%;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes arrow-movement {
  0% {
    opacity: 0;
    top: 45%;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/*chat*/

.chatBlock {
  margin: 0 auto;
  width: 85%;
  font-size: 15px;
  margin-top: -25%;
  position: relative;
}
.chatBlock p {
  margin: 0 0 0.7em;
  border-radius: 1em;
  padding: 0.5em 1em;
  background: #e5e5ea;
  max-width: 75%;
  clear: both;
  position: relative;
  line-height: 1.5;
}
.chatBlock p img {
  width: 80%;
}
.chatBlock p.them {
  float: left;
}
.chatBlock p.them:after {
  content: "";
  position: absolute;
  left: -0.5em;
  bottom: 0;
  width: 0.5em;
  height: 1em;
  border-right: 0.5em solid #e5e5ea;
  border-bottom-right-radius: 1em 0.5em;
}
.chatBlock p.me {
  float: right;
  background-color: #1289fe;
  color: white;
}
.chatBlock p.me:after {
  content: "";
  position: absolute;
  right: -0.5em;
  bottom: 0;
  width: 0.5em;
  height: 1em;
  border-left: 0.5em solid #1289fe;
  border-bottom-left-radius: 1em 0.5em;
}
</style>
