<template>
  <div class="wrapper">
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img"  :src="item.imgUrl"/>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/78/0a6355bcbbf89502.jpg_750x200_fc738633.jpg'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/2d/0d7dc3400a50b502.jpg_750x200_4ca95dd4.jpg'
      }
      ]
    }
  }
}
</script>

<style scoped lang="stylus" type="text/stylus">
    /*>>> 指组件穿透，由于scoped的限制，.swiper-pagination-bullet-active 不起作用*/
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.7%
    /*使用padding-bottom 31.25%是图片宽高比，使得比例始终保持一致*/
    background: #eee
    .swiper-img
      width: 100%
</style>
