<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!--{{this.$store.state.city}}-->
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  // 将state里的数据映射到computed
  computed: {
    ...mapState(['city'])
  }
}
</script>

<!--scoped只对当前组件有效/*1rem=html font-size=50px*/-->
<style scoped type="text/stylus" lang="stylus">
  @import "~styles/varibles.styl"
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #ffffff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        front-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #ffffff
      border-radius .1rem
      color: #ccc
      line-height:  .64rem
    .header-right
      /*最小宽度*/
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align : center
      color: #fff
      .arrow-icon
        margin-left : -.04rem
        font-size:  .24rem

</style>
