<template>
  <div>
    <div class="banner" @click="handBannerClick">
      <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
             alt="" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe653;</span>
          {{this.bannerImgs.length}}</div>
      </div>
    </div>
    <fade-animation>
      <!--以插槽的方式实现渐隐渐现效果-->
      <common-gallary
        :imgs="bannerImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></common-gallary>
    </fade-animation>

  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1809/c9/c9ab2722d2990967a3.img.jpg_r_800x800_2ab18a45.jpg',
        'http://img1.qunarzz.com/sight/p0/1809/fa/faa841bf8c7fe255a3.img.jpg_r_800x800_9b3b1c63.jpg']
    }
  },
  methods: {
    handBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }

  }
}
</script>

<style scoped lang="stylus" type="text/stylus">
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display flex
      position absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color #fff
      background-image: linear-gradient(top,rgba(0, 0, 0, 0),rgba(0, 0, 0, .8))
      .banner-title
        flex: 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        padding: 0 .4rem
        line-height: .32rem
        border-radius .2rem
        margin-top .14rem
        background: rgba(0, 0, 0, .8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
