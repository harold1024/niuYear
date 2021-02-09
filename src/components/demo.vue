<template>
  <div class="layout">
    <header></header>
    <main>
      <div class="icons" ref="icons">
        <div ref="vue" style="display: none">
          <i class="iconfont">&#xe61d;</i>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yanhua4"></use>
          </svg>
        </div>
        <div ref="nuxt" style="display: none">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fireworks"></use>
          </svg>
        </div>
        <div ref="quasar" style="display: none">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yanhua6"></use>
          </svg>
        </div>
        <div ref="vuepress" style="display: none">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yanhua"></use>
          </svg>
        </div>
        <div ref="gridsome" style="display: none">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yanhua2"></use>
          </svg>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  data() {
    return {
      width: window.innerWidth / 2,
      height: (window.innerHeight * 0.8) / 2,
      count: 15,
      index: 0,
      iconsList: ["nuxt", "vue", "quasar", "vuepress", "gridsome"],
      animationStart: false,
    };
  },
  mounted() {
    this.popIcons();
  },
  methods: {
    popIcons() {
      let className = null;
      if (!this.animationStart) {
        className = this.iconsList[this.index];
        this.animationStart = true;
      } else {
        this.index =
          this.index == this.iconsList.length - 1 ? 0 : this.index + 1;
        className = this.iconsList[this.index];
      }

      const icons = this.$refs.icons;
      const target = this.$refs[className];
      target.style = "";
      target.classList.add(className);
      const targetCopy = target.cloneNode(true);
      const newNodeList = [];
      for (let i = this.count; i--; ) {
        let node = targetCopy.cloneNode(true);
        newNodeList.push(node);
        icons.appendChild(node);
      }

      const animationTask = [];

      document.getElementsByClassName(className).forEach((node) => {
        animationTask.push(this.animation(node));
      });

      Promise.all(animationTask).then(() => {
        newNodeList.forEach((node) => {
          node.parentNode.removeChild(node);
        });
        this.popIcons();
      });
    },
    animation(node) {
      const width = this.width;
      const height = this.height;
      return new Promise((resolve, reject) => {
        try {
          const v = gsap.to(node, 0.3, {
            x: 2 * (Math.random() - 0.5) * width,
            y: 2 * (Math.random() - 0.5) * height,
            autoAlpha: Math.random() * 0.4 + 0.2,
            scale: Math.random() * 0.5 + 0.3,
            rotate: 2 * (Math.random() - 0.5) * 40,
          });
          setTimeout(() => {
            v.reverse().then(() => {
              resolve();
            });
          }, 3000);
        } catch (e) {
          reject(e);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin flex() {
  display: flex;
  justify-content: center;
  align-items: center;
}

.layout {
  overflow: hidden;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

header {
  @include flex;
  height: 15%;
  background-color: hsla(0, 0%, 100%, 0);
  // border-bottom: 1px solid fade-out(#313131, 0.7);
  z-index: 10;
}

main {
  height: 50%;
  // border-bottom: 1px solid fade-out(#313131, 0.7);

  .vue,
  .nuxt,
  .quasar,
  .vuepress,
  .gridsome {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    z-index: -1;
  }
}

.icons {
  position: relative;
  height: 100%;
}
</style>
