<template>
    <div>
      <home-header></home-header>
      <home-swiper :list="swiperList"></home-swiper>
      <home-icons :list="iconList"></home-icons>
      <home-recommend :list="recommendList"></home-recommend>
      <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      // 当请求以/api开头，api将指向/static/mock ，在config/index.json下配置
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  // 使用keep-alive后城市切换不会重新发送ajax请求，为了解决此问题，如下，keep-alive新增的生命周期函数
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style scoped>

</style>
