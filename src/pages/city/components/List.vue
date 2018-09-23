<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom" >当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.$store.currentCity}}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom" >热门城市</div>
          <div class="button-list">
            <div class="button-wrapper"
                 v-for="item of hot"
                 :key="item.id"
                 @click="handleCityClick(item.name)"
            >
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
        <!--按字母分类列表-->
        <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
            <div class="item border-bottom"
                 v-for="innerItem of item"
                 :key="innerItem.id"
                 @click="handleCityClick(innerItem.name)"
            >
              {{innerItem.name}}
            </div>
          </div>
        </div>
        </div>
      </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('updateCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations({
      changeCity: 'updateCity'
    })
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    // 监听letter的变化
    letter () {
      if (this.letter) {
        // 获取到相应字母的元素
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style scoped type="text/stylus" lang="stylus">
  @import "~styles/varibles.styl"
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow hidden
    position absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
    .item-list
      line-height: .76rem
      padding-left .2rem
</style>
