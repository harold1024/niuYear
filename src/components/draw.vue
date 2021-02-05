<!--  -->
<template>
  <div class="draw">
		<div class="draw-label">你的新年标签:</div>
    <img src="../assets/images/jiang.png" alt="" style="width: 100%" />
    <div class="draw-txt">{{ draw }}</div>
    <div class="clickBut" @click="click()" v-if="isStart">開始</div>
    <div class="clickBut" @click="stop()" v-else>暫停</div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      words: ["帅", "美", "赚", "富", "甜", "爱"],
      draw: "",
			randomTimer: "",
			isStart: false,
    };
  },
  //方法集合
  methods: {
    click() {
			this.playRandom();
			this.isStart = !this.isStart
    },
    stop() {
			clearInterval(this.randomTimer);
			this.isStart = !this.isStart
    },
    // endRandom() {
    //   // emojEle.src = emojs.aha;
    //   // clearInterval(this.randomTimer);
    //   // clearInterval(rainTimer);
    // },
    getRandomWords() {
      let randIndex = Math.floor(Math.random() * this.words.length);
      this.draw = this.words[randIndex];
    },
    playRandom() {
      this.randomTimer = setInterval(this.getRandomWords, 100);
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.playRandom();
  },
};
</script>
<style scoped lang="scss">
/* @import url(); 引入css类 */
@import "../assets/draw.scss";
</style>