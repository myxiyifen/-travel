<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
        <img class="item-img" :src="item.imgUrl" alt="" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
  // data () {
  //   return {
  //     recommendList: [{
  //       id: '001',
  //       imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/4bcd11cc3a5374.jpg_r_640x214_988a4cee.jpg',
  //       title: '芭拉胡景区',
  //       desc: '描述描述描述描述描述'
  //     }, {
  //       id: '002',
  //       imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/4bcd11cc3a5374.jpg_r_640x214_988a4cee.jpg',
  //       title: '芭拉胡景区',
  //       desc: '描述描述描述描述描述'
  //     }, {
  //       id: '003',
  //       imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/4bcd11cc3a5374.jpg_r_640x214_988a4cee.jpg',
  //       title: '芭拉胡景区',
  //       desc: '描述描述描述描述描述'
  //     }, {
  //       id: '004',
  //       imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/4bcd11cc3a5374.jpg_r_640x214_988a4cee.jpg',
  //       title: '芭拉胡景区',
  //       desc: '描述描述描述描述描述'
  //     }, {
  //       id: '005',
  //       imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/4bcd11cc3a5374.jpg_r_640x214_988a4cee.jpg',
  //       title: '芭拉胡景区',
  //       desc: '描述描述描述描述描述'
  //     }]
  //   }
  // }
}
</script>

<style scoped lang="stylus" type="text/stylus">
  @import "~styles/mixins.styl"
  .title
    /*margin-top .1rem*/
    line-height:  .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    /*为了使title标题过长后显示为...*/
    min-width:  0
    .item-title
      line-height:  .54rem
      font-size:  .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #eee
      ellipsis()
</style>
